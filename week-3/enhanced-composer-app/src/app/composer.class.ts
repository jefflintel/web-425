/* ============================================
 ; Title:  composer.class.ts
 ; Author: Professor Krasso
 ; Date:   26 July 2020
 ; Modified by: Jeff Lintel
 ; Description: composer class
 ===========================================*/

import { IComposer } from './composer.interface'

export class Composer {
  composers: Array<IComposer>

  constructor() {
    this.composers = [
      {composerId: 100, fullName: "Randy Newman", genre: "Film Soundtracks"},
      {composerId: 200, fullName: "Michael Giacchino", genre: "Film Soundtracks"},
      {composerId: 300, fullName: "Patrick Doyle", genre: "Film Soundtracks"},
      {composerId: 400, fullName: "Jeff Danna", genre: "Film Soundtracks"},
      {composerId: 500, fullName: "Hans Zimmer", genre: "Film Soundtracks"}
    ]
  }

  getComposers() {
    return this.composers;
  }

  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
  }
}

