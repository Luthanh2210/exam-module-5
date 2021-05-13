import { Component, OnInit } from '@angular/core';
import {BookService} from '../book.service';
import {Book} from '../book';
import {Title} from "@angular/platform-browser";
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {
  books: Book[]=[];

  constructor(private bookService: BookService,private titleService:Title) {
    this.getAll();
    this.titleService.setTitle("Danh sách các cuốn sách");
  }

  ngOnInit(): void {
  }

  getAll(): Book[]{
    this.bookService.getAllBook().subscribe(books =>{
      this.books = books;
    })
    return this.books;
  }

  faCoffee = faCoffee;
}
