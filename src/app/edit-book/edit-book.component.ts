import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {BookService} from '../book.service';
import {Subscription} from 'rxjs';
import {Book} from '../book';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})

export class EditBookComponent implements OnInit {
  sub: Subscription;
  id:number;
  book: Book={
    id:0,
    title:'',
    author:'',
    description:''
  }
  constructor(private router:Router,
              private activeRouter:ActivatedRoute,
              private bookService:BookService,private titleService:Title ) {
    this.sub = this.activeRouter.paramMap.subscribe((paramMap:ParamMap)=>{
      this.id = +paramMap.get('id');
      this.getBook(this.id);
      this.titleService.setTitle("Cập nhật thông tin sách");
    })

  }

  ngOnInit(): void {
  }

  getBook(id: number){
    this.bookService.getBookById(id).subscribe(value => {
      this.book = value;
    })
  }

  updateBook(){
    this.bookService.updateBook(this.book.id,this.book).subscribe(()=>{
      alert("Cập nhật thành công!")
      this.router.navigate(['/']);
    })
  }

  faEdit = faEdit;
}
