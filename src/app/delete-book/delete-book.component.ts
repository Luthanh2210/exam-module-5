import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {BookService} from '../book.service';
import {Book} from '../book';
import {Subscription} from 'rxjs';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import {Title} from "@angular/platform-browser";


@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {
  sub: Subscription;
  id: number;
  book: Book = {
    id: 0,
    title: '',
    author: '',
    description: ''
  };
  constructor(private router: Router, private activeRouter: ActivatedRoute, private bookService: BookService,private titleService:Title) {
    this.sub = this.activeRouter.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getBookId(this.id);
      this.titleService.setTitle("Xoá sách");
    });
  }

  ngOnInit(): void {
  }
  getBookId(id: number){
    this.bookService.getBookById(id).subscribe(value => {
      this.book = value;
    });
  }

  deleteBook(){
    this.bookService.deleteBook(this.id).subscribe(() => {
      alert('Xoá thành công!');
      this.router.navigate(['/']);
    });
  }

  faTrashAlt = faTrashAlt;
}
