import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

import { BooksService } from '../services/books.service';
import { Book } from '../models/book';

@Component({
  selector: 'app-advanced-transitions',
  templateUrl: './advanced-transitions.component.html',
  styleUrls: ['./advanced-transitions.component.css'],
  animations: [
    trigger('advancedTransitions', [
      state(
        'active',
        style({
          'background-color': 'GOLD',
          transform: 'scale(1.1)'
        })
      ),
      state(
        'inactive',
        style({
          'background-color': 'WHEAT',
          transform: 'scale(1)'
        })
      ),
      transition('inactive => active', [
        animate(
          '400ms',
          style({
            'background-color': 'LIGHTSALMON',
            transform: 'scale(1.3)'
          })
        ),
        animate(
          '600ms ease-in',
          style({
            'background-color': 'GREENYELLOW',
            transform: 'scale(1)'
          })
        )
      ]),
      transition('active => inactive', animate('200ms ease-in'))
    ])
  ]
})
export class AdvancedTransitionsComponent implements OnInit {
  books: Book[] = [];

  constructor(private service: BooksService) {}

  ngOnInit() {
    this.books = this.service.getBooks();
  }
}
