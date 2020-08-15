/* ============================================
 ; Title:  book.interface.ts
 ; Author: Professor Krasso
 ; Date:   5 August 2020
 ; Modified by: Jeff Lintel
 ; Description: book interface
 ===========================================*/

export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}
