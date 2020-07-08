/* ============================================
 ; Title:  app.module.ts
 ; Author: Professor Krasso
 ; Date:   7 July 2020
 ; Modified by: Jeff Lintel
 ; Description: app module
 ===========================================*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
