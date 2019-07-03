import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy
} from '@angular/core';
import { Book } from '../book';
import { BookDataService } from '../book-data.service';
import { Subscription, Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class BookListComponent implements OnInit {
  books$: Observable<Book[]>;

  constructor(private bookService: BookDataService) {}

  ngOnInit() {
    this.books$ = this.bookService.getBooks().pipe(
      tap(console.log),
      catchError(err => {
        console.error(err);
        return of([]);
      })
    );
  }
}
