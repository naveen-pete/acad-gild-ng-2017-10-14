import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes
} from '@angular/animations';

import { BooksService } from '../services/books.service';
import { Book } from './../models/book';

@Component({
  selector: 'app-multi-step-animation',
  templateUrl: './multi-step-animation.component.html',
  styleUrls: ['./multi-step-animation.component.css'],
  animations: [
    trigger('multiStepFlyInOut', [
      state(
        'in',
        style({
          'background-color': 'Wheat',
          transform: 'translateX(0)'
        })
      ),
      transition('void => *', [
        animate(
          1000,
          keyframes([
            style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
            style({ opacity: 1, transform: 'translateX(15px)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
          ])
        )
      ]),
      transition('* => void', [
        animate(
          1000,
          keyframes([
            style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
            style({ opacity: 1, transform: 'translateX(-15px)', offset: 0.7 }),
            style({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
          ])
        )
      ])
    ]),
    trigger('multiStepText', [
      state(
        'normal',
        style({
          'font-size': '30px',
          color: 'blue'
        })
      ),
      state(
        'large',
        style({
          'font-size': '80px',
          color: 'green'
        })
      ),
      transition(
        'normal => large',
        animate(
          '3s',
          keyframes([
            style({
              'background-color': 'Orange',
              'font-size': '45px',
              offset: 0.3
            }),
            style({
              'background-color': 'Magenta',
              'font-size': '65px',
              offset: 0.6
            })
          ])
        )
      ),
      transition('large => normal', animate(300))
    ])
  ]
})
export class MultiStepAnimationComponent implements OnInit {
  books: Book[] = [];
  bookName: string;
  currentState: string = 'normal';

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

  onToggleState() {
    this.currentState = this.currentState === 'normal' ? 'large' : 'normal';
  }
}
