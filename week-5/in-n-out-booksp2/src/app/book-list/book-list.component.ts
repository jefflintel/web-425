/* ============================================
 ; Title:  book-list.component.ts
 ; Author: Professor Krasso
 ; Date:   5 August 2020
 ; Modified by: Jeff Lintel
 ; Description: book list component
 ===========================================*/

 import { Component, OnInit } from '@angular/core';
 import { BooksService } from '../books.service';
 import { IBook } from '../book.interface';
 import { Observable } from 'rxjs';

 @Component({
   selector: 'app-book-list',
   templateUrl: './book-list.component.html',
   styleUrls: ['./book-list.component.scss']
 })
 export class BookListComponent implements OnInit {

   books: Observable<IBook[]>;
   header: Array<string> = ['isbn', 'title', 'numOfPages', 'authors']
   book: IBook;

   constructor(private booksService: BooksService) {
     this.books = this.booksService.getBooks();
   }

   ngOnInit(): void {
   }

   showBookDetails(isbn: string) {
     this.book = this.booksService.getBook(isbn);
     console.log(this.book);
   }
 }
