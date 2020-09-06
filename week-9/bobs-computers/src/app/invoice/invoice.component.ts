/* ============================================
 ; Title:  invoice.component.ts
 ; Author: Jeff Lintel
 ; Date:   30 August 2020
 ; Description: invoice component
 ===========================================*/

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InvoiceDialogComponent } from '../invoice-dialog/invoice-dialog.component';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  checkedItems = [];

  invoiceTotal: number;
  partsPrice = 0;
  laborHours = 0;


  checkboxItemsList = [
    {
      name: "Password Reset",
      price: 39.99,
      label: "Password Reset ($39.99)",
      isChecked: false
    },
    {
      name: "Spyware Removal",
      price: 99.99,
      label: "Spyware Removal ($99.99)",
      isChecked: false
    },
    {
      name: "RAM Upgrade",
      price: 129.99,
      label: "RAM Upgrade ($129.99)",
      isChecked: false
    },
    {
      name: "Software Installation",
      price: 49.99,
      label: "Software Installation ($49.99)",
      isChecked: false
    },
    {
      name: "Tune-up",
      price: 89.99,
      label: "Tune-up ($89.99)",
      isChecked: false
    },
    {
      name: "Keyboard Cleaning",
      price: 45.00,
      label: "Keyboard Cleaning ($45.00)",
      isChecked: false
    },
    {
      name: "Disk Clean-up",
      price: 149.99,
      label: "Disk Clean-up ($149.99)",
      isChecked: false
    }
  ]

  constructor(private dialog: MatDialog) {

  }

  getCheckedItems() {
    this.checkedItems = this.checkboxItemsList.filter((item) => {
      return item.isChecked
    });
  }

  addCheckedItems() {
    this.checkedItems = [];
    this.checkboxItemsList.forEach((item) => {
      if(item.isChecked) {
        this.checkedItems.push(item)
        this.invoiceTotal += item.price
      }
    });

    }

    ngOnInit(): void {
      this.invoiceTotal = 0;
      this.getCheckedItems();
    }

    changeCheck() {
      this.invoiceTotal = 0;
      this.getCheckedItems();
      this.addCheckedItems();

    }

    partsChange() {
      /*if (this.partsPrice === this.partsPrice) {
      this.invoiceTotal += this.partsPrice;
      } else {
        this.invoiceTotal = 0 + this.partsPrice;
      }*/
      this.invoiceTotal += this.partsPrice;
    }

    laborChange() {
      this.invoiceTotal += this.laborHours * 50;
    }

    generateInvoice() {
      const dialogRef = this.dialog.open(InvoiceDialogComponent, {
        width: '95%',
        data:{
          laborHours: this.laborHours,
          partsPrice: this.partsPrice,
          checkedItems: this.checkedItems,
          invoiceTotal: this.invoiceTotal
        }
      });
      this.checkedItems.forEach((item) => {
        item.isChecked = false;
      });
      this.getCheckedItems();
      this.invoiceTotal = 0;
      this.partsPrice = 0;
      this.laborHours = 0;
    }

  }





