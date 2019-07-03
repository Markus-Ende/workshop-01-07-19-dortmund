import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookDataService } from './book-data.service';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookListComponent } from './book-list/book-list.component';
import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books/books.component';
import { BookNewComponent } from './book-new/book-new.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    BooksComponent,
    BookListComponent,
    BookDetailComponent,
    BookEditComponent,
    BookNewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BooksRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [BooksComponent, BookListComponent],
  providers: [BookDataService]
})
export class BooksModule {}
