import { Injectable } from '@angular/core';

import { Book } from '../models/book';

@Injectable()
export class BooksService {
  private books: Book[] = [];

  constructor() {
    this.books = [
      new Book('JavaScript: The Good Parts', 'inactive'),
      new Book('Data Structures and Algorithms', 'inactive'),
      new Book('Machine Learning', 'inactive'),
      new Book('Distributed Computing', 'inactive')
    ];
  }

  getBooks() {
    return Object.assign([], this.books);
  }
}
