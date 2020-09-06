/* ============================================
 ; Title:  app.component.ts
 ; Author: Jeff Lintel
 ; Date:   30 August 2020
 ; Description: app component
 ===========================================*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string;

  constructor() {
    this.assignment = "Welcome to Bob's Computers!"
  }
}
