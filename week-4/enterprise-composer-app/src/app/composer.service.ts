/* ============================================
 ; Title:  composer.service.ts
 ; Author: Professor Krasso
 ; Date:   2 August 2020
 ; Modified by: Jeff Lintel
 ; Description: composer service
 ===========================================*/

import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {

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

  getComposers(): Observable<IComposer[]> {
    return of(this.composers);
  }

  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
  }

  filterComposers(name: string): Observable<IComposer[]> {
    return of(this.composers).pipe(
      map(composers => composers.filter(composer => composer.fullName.toLowerCase().indexOf(name) > -1)));
  }
}
