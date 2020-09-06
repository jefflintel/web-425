/* ============================================
 ; Title:  app-routing.module.ts
 ; Author: Jeff Lintel
 ; Date:   30 August 2020
 ; Description: app routing module
 ===========================================*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { InvoiceComponent } from './invoice/invoice.component';


const routes: Routes = [
  { path: '',
    component: HomeComponent
  },
  { path: 'contact',
    component: ContactComponent
  },
  { path: 'home',
    component: HomeComponent
  },
  { path: 'invoice',
    component: InvoiceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
