/* ============================================
 ; Title:  app-routing.module.ts
 ; Author: Professor Krasso
 ; Date:   19 July 2020
 ; Modified by: Jeff Lintel
 ; Description: routing module
 ===========================================*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//new routes
import { ComposerListComponent } from './composer-list/composer-list.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/composer-list',
    pathMatch: 'full'
  },
  {
    path: 'composer-list',
    component: ComposerListComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
