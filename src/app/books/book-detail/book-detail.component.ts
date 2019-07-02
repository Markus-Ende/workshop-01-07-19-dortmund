import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookDataService } from '../book-data.service';
import { Book } from '../book';
import { Subscription } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit, OnDestroy {
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

    // const outerSubscription = this.activatedRoute.params.subscribe(
    //   (params: { isbn: string }) => {
    //     const innerSubscription = this.bookService
    //       .getBookByIsbn(params.isbn)
    //       .subscribe(book => (this.book = book));
    //     this.subscriptions.add(innerSubscription);
    //   }
    // );
    this.subscriptions.add(outerSubscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
