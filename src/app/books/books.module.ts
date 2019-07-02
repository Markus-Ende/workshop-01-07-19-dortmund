import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books/books.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDataService } from './book-data.service';
import { BookDetailComponent } from './book-detail/book-detail.component';

@NgModule({
  declarations: [BooksComponent, BookListComponent, BookDetailComponent],
  imports: [CommonModule, BooksRoutingModule],
  exports: [BooksComponent, BookListComponent],
  providers: [BookDataService]
})
export class BooksModule {}
