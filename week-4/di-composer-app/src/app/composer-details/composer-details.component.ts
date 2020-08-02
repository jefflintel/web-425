/* ============================================
 ; Title:  composer-details.component.ts
 ; Author: Professor Krasso
 ; Date:   26 July 2020
 ; Modified by: Jeff Lintel
 ; Description: composer details component
 ===========================================*/

import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service'

@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})
export class ComposerDetailsComponent implements OnInit {

  composerId: number;
  composer: IComposer;

  constructor(private route:  ActivatedRoute, private ComposerService: ComposerService) {
    this.composerId = parseInt(this.route.snapshot.paramMap.get('composerId'), 10);

    if(this.composerId) {
      this.composer = this.ComposerService.getComposer(this.composerId);
    }
   }

  ngOnInit(): void {
  }

}
