import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book } from '../book';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { BookDataService } from '../book-data.service';
import { tap, switchMap, first } from 'rxjs/operators';

@Component({
  selector: 'book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit, OnDestroy {
  book: Book;
  private subscriptions = new Subscription();

  constructor(
    private activatedRoute: ActivatedRoute,
    private bookService: BookDataService
  ) {}

  ngOnInit() {
    const outerSubscription = this.activatedRoute.params
      .pipe(
        tap(x => console.log(x)),
        switchMap((params: { isbn: string }) =>
          this.bookService
            .getBookByIsbn(params.isbn)
            .pipe(tap(x => console.log(x)))
        )
      )
      .subscribe(book => (this.book = book));
    this.subscriptions.add(outerSubscription);
  }

  save(formValue: { title: string; abstract: string; author: string }) {
    const book = this.book;
    console.log('edited book:', book);
    this.bookService
      .updateBook(book)
      .pipe(first())
      .subscribe();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
