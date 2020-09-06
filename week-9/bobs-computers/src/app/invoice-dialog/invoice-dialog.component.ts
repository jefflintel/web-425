import { Component, OnInit, Input, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-invoice-dialog',
  templateUrl: './invoice-dialog.component.html',
  styleUrls: ['./invoice-dialog.component.css']
})

export class InvoiceDialogComponent implements OnInit {

  @Input() checkedItems;
  @Input() invoiceTotal: number;
  @Input() partsPrice: number;
  @Input() laborHours: number;

  constructor(private dialogRef: MatDialogRef<InvoiceDialogComponent>, @Inject(MAT_DIALOG_DATA)data) {
    this.laborHours = data.laborHours,
    this.partsPrice = data.partsPrice,
    this.checkedItems = data.checkedItems,
    this.invoiceTotal = data.invoiceTotal
  }

  ngOnInit(): void {
  }

}
