/* ============================================
 ; Title:  wishlist.component.ts
 ; Author: Professor Krasso
 ; Date:   14 August 2020
 ; Modified by: Jeff Lintel
 ; Description: wishlist component
 ===========================================*/

import { Component, OnInit } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  items: Array<IWishlistItem> = [];

  constructor() { }

  ngOnInit(): void {
  }

  updateItemsHandler(item: IWishlistItem) {
    console.log('Inside the wishlist.component.ts (parent) - updateItemsHandler() function');
    console.log(item);
    this.items.push(item);
    console.log(this.items);
  }

}
