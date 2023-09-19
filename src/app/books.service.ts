import { Injectable } from '@angular/core';
import { Livro } from './models/livros';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  livros : Livro[] = [];


  constructor(private http: HttpClient) {

  }

  getBooks(): Observable<Livro[]>{
    return this.http.get<Livro[]>("http://localhost:3000/books");

  }
}
