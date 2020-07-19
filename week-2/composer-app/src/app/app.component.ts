/* ============================================
 ; Title:  app.component.ts
 ; Author: Professor Krasso
 ; Date:   19 July 2020
 ; Modified by: Jeff Lintel
 ; Description: app component
 ===========================================*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment = 'Exercise 2.4 - Routing in Action';
}
