import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddVacationDialogComponent } from '../add-vacation-dialog/add-vacation-dialog.component';

@Component({
  selector: 'app-doctor-vacations',
  templateUrl: './doctor-vacations.component.html',
  styleUrls: ['./doctor-vacations.component.css']
})
export class DoctorVacationsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddVacationDialogComponent, {
      data: {isAdd: true},
      height: '400px',
      width: '600px',
      //data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');
      //this.animal = result;
    });
  }
}
