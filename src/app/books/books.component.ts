import { BooksService } from './../books.service';
import { Component, OnInit } from '@angular/core';
import { Livro } from '../models/livros';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {


  livros : Livro[] = [];


  constructor(private BooksService: BooksService){}
  ngOnInit(): void {
     this.BooksService.getBooks().subscribe(
      {
      next: livros => this.livros = livros
      }
     )
  }

}
// crt + . = importa a pasta/modulos para o componente
