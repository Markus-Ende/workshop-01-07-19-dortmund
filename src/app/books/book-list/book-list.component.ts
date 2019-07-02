import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book } from '../book';
import { BookDataService } from '../book-data.service';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: Book[];

  constructor(private bookService: BookDataService) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe(books => (this.books = books));
  }
}
