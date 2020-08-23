/* ============================================
 ; Title:  grade-summary.component.ts
 ; Author: Professor Krasso
 ; Date:   14 August 2020
 ; Modified by: Jeff Lintel
 ; Description: grade summary component
 ===========================================*/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.css']
})
export class GradeSummaryComponent implements OnInit {

  @Input() grade: string;
  @Input() course: string;

  constructor() { }

  ngOnInit(): void {
  }

}
