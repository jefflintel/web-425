/* ============================================
 ; Title:  app-routing.module.ts
 ; Author: Professor Krasso
 ; Date:   19 July 2020
 ; Modified by: Jeff Lintel
 ; Description: aop-routing module
 ===========================================*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import about, contact, and home modules
import { HomeComponent} from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path:  'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
