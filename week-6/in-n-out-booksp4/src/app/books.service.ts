/* ============================================
 ; Title:  books.service.ts
 ; Author: Professor Krasso
 ; Date:   7 August 2020
 ; Modified by: Jeff Lintel
 ; Description: books service
 ===========================================*/

import { Injectable } from '@angular/core';

import{ IBook } from './book.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Array<IBook>;

  constructor() {

    this.books = [
      {
        isbn: '978-0525537090',
        title: 'How To',
        description: 'Absurd Scientific Advice for Common Real-World Problems',
        numOfPages: 320,
        authors: ['Randall Munroe']
      },
      {
        isbn: '978-0544272996',
        title: 'What If',
        description: 'Serious Scientific Answers to Absurd Hypothetical Questions',
        numOfPages: 320,
        authors: ['Randall Munroe']
      },
      {
        isbn: '978-0544668256',
        title: 'Thing Explainer',
        description: 'Complicated Stuff in Simple Words',
        numOfPages: 64,
        authors: ['Randall Munroe']
      },
      {
        isbn: '978-0575115347',
        title: 'The Hitchhiker\'s Guide to the Galaxy',
        description: 'The intergalactic adventures of an ordinary Earthling',
        numOfPages: 208,
        authors: ['Douglas Adams']
      },
      {
        isbn: '978-0385333481',
        title: 'Cat\'s Cradle',
        description: 'A satirical commentary on modern man and his madness',
        numOfPages: 304,
        authors: ['Kurt Vonnegut']
      }
    ]
  }

  getBooks(): Observable<IBook[]> {
    return of(this.books);
  }

  getBook(isbn: string): IBook {
    for (let book of this.books) {
      if(book.isbn === isbn) {
        return book;
      }
    }
  }
}
