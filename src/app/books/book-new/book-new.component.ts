import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { BookDataService } from '../book-data.service';

@Component({
  selector: 'book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss']
})
export class BookNewComponent implements OnInit, OnDestroy {
  form: FormGroup;
  subscription = Subscription.EMPTY;

  constructor(
    private formBuilder: FormBuilder,
    private booksService: BookDataService
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: ['new title', [Validators.required]],
      isbn: ['', [Validators.required, Validators.minLength(3)]]
    });

    this.form.valueChanges.subscribe(console.log);
  }

  hasError(name: string, errorType: string) {
    return (
      this.form.get(name).hasError(errorType) && this.form.get(name).touched
    );
  }

  onSubmit() {
    console.log('submit', this.form.value);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
