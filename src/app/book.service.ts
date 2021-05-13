import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from './book';
import {environment} from '../environments/environment';

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) {
  }

  getAllBook(): Observable<Book[]>{
    return this.httpClient.get<Book[]>(API_URL + 'books');
  }

  createBook(book: Book): Observable<Book>{
    return this.httpClient.post<Book>(API_URL + 'books', book);
  }

  getBookById(id: number): Observable<Book>{
    return this.httpClient.get<Book>(API_URL + `books/${id}`);
  }

  updateBook(id: number, book: Book): Observable<Book>{
    return this.httpClient.put<Book>(API_URL + `books/${id}`, book);
  }

  deleteBook(id: number): Observable<Book>{
    return this.httpClient.delete<Book>(API_URL + `books/${id}`);
  }
}
