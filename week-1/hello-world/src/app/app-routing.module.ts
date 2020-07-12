/* ============================================
 ; Title:  app-routing.module.ts
 ; Author: Professor Krasso
 ; Date:   7 July 2020
 ; Modified by: Jeff Lintel
 ; Description: app routing module
 ===========================================*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
