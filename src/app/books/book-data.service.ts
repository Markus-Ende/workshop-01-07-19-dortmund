import { Injectable } from '@angular/core';
import { Book } from './book';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BookDataService {
  createBook(value: Book) {
    return this.http
      .post<Book>(`http://localhost:4730/books`, value)
      .pipe(tap(createdBook => console.log('Created book:', createdBook)));
  }

  updateBook(value: Book) {
    return this.http
      .put<Book>(`http://localhost:4730/books/${value.isbn}`, value)
      .pipe(tap(updatedBook => console.log('Updated book:', updatedBook)));
  }

  getBookByIsbn(isbn: string): Observable<Book> {
    return this.http
      .get<Book>(`http://localhost:4730/books/${isbn}`)
      .pipe(delay(1000));
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:4730/books');
  }

  constructor(private http: HttpClient) {
    console.log('created book data service');
  }
}
