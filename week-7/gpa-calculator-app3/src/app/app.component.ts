/* ============================================
 ; Title:  app.component.ts
 ; Author: Professor Krasso
 ; Date:   14 August 2020
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
  assignment = 'gpa-calculator-app2';
}
