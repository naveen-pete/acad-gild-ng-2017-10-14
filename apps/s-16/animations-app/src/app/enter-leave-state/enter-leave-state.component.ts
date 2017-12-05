import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

import { BooksService } from '../services/books.service';
import { Book } from './../models/book';

@Component({
  selector: 'app-enter-leave-state',
  templateUrl: './enter-leave-state.component.html',
  styleUrls: ['./enter-leave-state.component.css'],
  animations: [
    trigger('enterLeaveState', [
      state(
        'inactive',
        style({
          'background-color': 'Wheat',
          transform: 'translateX(0) scale(1)',
          opacity: 1
        })
      ),
      state(
        'active',
        style({
          'background-color': 'Gold',
          transform: 'translateX(0) scale(1.1)',
          opacity: 1
        })
      ),
      transition('inactive => active', animate('400ms ease-in')),
      transition('active => inactive', animate('200ms ease-out')),
      transition('void => *', [
        style({
          // transform: 'translateX(0) scale(0)',
          transform: 'translateX(-100%)',
          opacity: 0
        }),
        animate('500ms ease-in')
      ]),
      transition('* => void', [
        animate(
          '500ms ease-out',
          style({
            // transform: 'translateX(0) scale(0)',
            transform: 'translateX(100%)',
            opacity: 0
          })
        )
      ])
    ])
  ]
})
export class EnterLeaveStateComponent implements OnInit {
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
