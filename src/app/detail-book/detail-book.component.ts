import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {BookService} from '../book.service';
import {Book} from '../book';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.css']
})
export class DetailBookComponent implements OnInit {
  sub: Subscription;
  id: number;
  book: Book={
    id:0,
    title:'',
    author:'',
    description:''
  }
  constructor(private router:Router, private activeRouter:ActivatedRoute, private bookService: BookService,private titleService:Title ) {
    this.sub = this.activeRouter.paramMap.subscribe((paramMap:ParamMap)=>{
      this.id = +paramMap.get('id');
      this.getBookId(this.id);
      this.titleService.setTitle("Thông tin sách");
    })
  }

  ngOnInit(): void {
  }

  getBookId(id: number){
    this.bookService.getBookById(id).subscribe(value => {
      this.book = value;
    })
  }

  faInfoCircle = faInfoCircle;
}
