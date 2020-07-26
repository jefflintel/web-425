/* ============================================
 ; Title:  home.component.ts
 ; Author: Professor Krasso
 ; Date:   26 July 2020
 ; Modified by: Jeff Lintel
 ; Description: home component
 ===========================================*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoggedIn: boolean;

  constructor() {

  }

  ngOnInit(): void {
  }

}
