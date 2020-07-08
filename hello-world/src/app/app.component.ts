/* ============================================
 ; Title:  app.component.ts
 ; Author: Professor Krasso
 ; Date:   7 July 2020
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
  myWorld = "You are now in Jeff Lintel's World!!!";
}
