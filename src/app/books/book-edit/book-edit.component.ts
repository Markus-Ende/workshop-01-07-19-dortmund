import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book } from '../book';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { BookDataService } from '../book-data.service';
import { tap, switchMap } from 'rxjs/operators';

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

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
