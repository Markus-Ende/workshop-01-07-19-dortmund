import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy
} from '@angular/core';
import { Book } from '../book';
import { BookDataService } from '../book-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class BookListComponent implements OnInit, OnDestroy {
  books: Book[];

  subscriptions: Subscription = new Subscription();

  constructor(private bookService: BookDataService) {}

  ngOnInit() {
    this.subscriptions.add(
      this.bookService.getBooks().subscribe(books => (this.books = books))
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
