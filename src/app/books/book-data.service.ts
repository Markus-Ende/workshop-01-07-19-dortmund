import { Injectable } from '@angular/core';
import { Book } from './book';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BookDataService {
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
