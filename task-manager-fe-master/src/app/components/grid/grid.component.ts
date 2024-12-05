import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-grid',
  imports: [AgGridAngular],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent {
  rowData = [
    { make: "Mazda", model: "CX-50", price: 48500, electric: false },
    { make: "Honda", model: "Accord", price: 42800, electric: false },
    { make: "Honda", model: "CR-V", price: 49000, electric: false },
    { make: "Polestar", model: "Polestar 2", price: 75000, electric: true }
  ]

  colDefs: ColDef[] = [
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" }
  ];

  defaultColDef: ColDef = {
    flex: 1
  };
}
