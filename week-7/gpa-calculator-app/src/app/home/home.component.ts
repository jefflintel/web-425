/* ============================================
 ; Title:  home.component.ts
 ; Author: Professor Krasso
 ; Date:   14 August 2020
 ; Modified by: Jeff Lintel
 ; Description: home component
 ===========================================*/

import { Component, OnInit } from '@angular/core';

import { ITranscript } from '../transcript.interface';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  transcriptEntry: ITranscript;
  selectableGrades: Array<string> = ['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F'];
  transcriptEntries: Array<ITranscript> = [];
  gpaTotal: number = 0;
  transcriptForm: FormGroup;

  constructor(private fb: FormBuilder) {
    //this.transcriptEntry = {} as ITranscript;
  }

  ngOnInit(): void {
    this.transcriptForm = this.fb.group({
      course:['', Validators.required],
      grade: ['', Validators.required]
    })
  }

  get form() {
    return this.transcriptForm.controls;
  }

  onSubmit(event) {
    //this.transcriptEntries.push(this.transcriptEntry);
    //this.transcriptEntry = {} as ITranscript;
    this.transcriptEntries.push({
      course: this.form.course.value,
      grade: this.form.grade.value
    });
    event.currentTarget.reset();
  }

  calculateResults() {
    let gpa: number = 0;
    for(let entry of this.transcriptEntries) {
      console.log(entry.grade)
      switch(entry.grade) {
        case 'A':
          gpa += 4.00;
          break;
        case 'A-':
          gpa += 3.70;
          break;
        case 'B+':
          gpa += 3.33; //note this is different than C+ or D+
          break;
        case 'B':
          gpa += 3.00;
          break;
        case 'B-':
          gpa += 2.70;
          break;
        case 'C+':
          gpa += 2.30;
          break;
        case 'C':
          gpa += 2.00;
          break;
        case 'C-':
          gpa += 1.70;
          break;
        case 'D+':
          gpa += 1.30;
          break;
        case 'D':
          gpa += 1.00;
          break;
        case 'D-':
          gpa += 0.70;
          break;
        default:
          gpa += 0.00;
          break;
      }
    }

    this.gpaTotal = gpa / this.transcriptEntries.length;

  }

  clearEntries() {
    this.transcriptEntries = [];
    this.gpaTotal = 0;
  }

}
