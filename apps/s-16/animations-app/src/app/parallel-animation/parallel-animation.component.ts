import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
  group
} from '@angular/animations';

import { BooksService } from '../services/books.service';
import { Book } from './../models/book';

@Component({
  selector: 'app-parallel-animation',
  templateUrl: './parallel-animation.component.html',
  styleUrls: ['./parallel-animation.component.css'],
  animations: [
    trigger('groupFlyInOut', [
      state(
        'in',
        style({ width: '380px', transform: 'translateX(0)', opacity: 1 })
      ),
      transition('void => *', [
        style({ width: '10px', transform: 'translateX(50px)', opacity: 0 }),
        group([
          animate(
            '2s 0.1s ease',
            style({
              transform: 'translateX(0)',
              width: '380px'
            })
          ),
          animate(
            '2s ease',
            style({
              opacity: 1
            })
          )
        ])
      ]),
      transition('* => void', [
        group([
          animate(
            '2s ease',
            style({
              transform: 'translateX(180px)',
              width: '10px'
            })
          ),
          animate(
            '2s 0.2s ease',
            style({
              opacity: 0
            })
          )
        ])
      ])
    ])
  ]
})
export class ParallelAnimationComponent implements OnInit {
  books: Book[] = [];
  bookName: string;

  constructor(private service: BooksService) {}

  ngOnInit() {
    this.books = this.service.getBooks();
  }

  onAdd() {
    this.books.push(new Book(this.bookName));
    this.bookName = '';
  }

  onRemove(book: Book) {
    this.books = this.books.filter(b => b.name !== book.name);
  }
}
