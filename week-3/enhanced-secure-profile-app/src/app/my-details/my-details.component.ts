/* ============================================
 ; Title:  my-details.component.ts
 ; Author: Professor Krasso
 ; Date:   19 July 2020
 ; Modified by: Jeff Lintel
 ; Description: my details component
 ===========================================*/
import { Component, OnInit } from '@angular/core';


//create Person class

export default class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = [
    "#TypeScript ", "#2020 ", "#CodingWithAngular ", "#ngOmaha " //extra space for readability
  ]

  constructor(fullName: string, favoriteFood: string, favoriteColor: string) {
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor
  }
}

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {

  myProfile: Person

  constructor() {

    this.myProfile = new Person("Jeff Lintel", "Filet mignon", "purple");
  }

  ngOnInit(): void {
  }

}
