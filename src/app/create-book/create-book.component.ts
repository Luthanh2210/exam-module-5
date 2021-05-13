import { Component, OnInit } from '@angular/core';
import {Book} from '../book';
import {Router} from '@angular/router';
import {BookService} from '../book.service';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  book: Book = {
    id:0,
    title:'',
    author:'',
    description:''
  }
  constructor(private router: Router, private bookService: BookService,private titleService:Title ) {
    this.titleService.setTitle("Thêm sách mới");
  }

  ngOnInit(): void {
  }

  createBook(){
    this.bookService.createBook(this.book).subscribe(()=>{
      alert("Thêm mới thành công!");
      this.router.navigate(['/']);
    })
  }

  faPlusCircle = faPlusCircle ;
}
