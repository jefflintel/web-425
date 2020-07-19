/* ============================================
 ; Title: composer-list.component.ts
 ; Author: Professor Krasso
 ; Date:   19 July 2020
 ; Modified by: Jeff Lintel
 ; Description: composer list component
 ===========================================*/

import { Component, OnInit } from '@angular/core';

export default class Composer {
  fullName: string;
  genre: string;

  constructor(fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  composers: Array<Composer>;

  constructor() {
    this.composers = [
      new Composer("Randy Newman", "Film Soundtracks"),
      new Composer("Michael Giacchino", "Film Soundtracks"),
      new Composer("Patrick Doyle", "Film Soundtracks"),
      new Composer("Jeff Danna", "Film Soundtracks"),
      new Composer("Hans Zimmer", "Film Soundtracks")
    ]
  }

  ngOnInit(): void {
  }

}
