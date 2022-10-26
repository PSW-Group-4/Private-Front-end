import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { AddOrEditAppointmentDialogComponent } from '../add-or-edit-appointment-dialog/add-or-edit-appointment-dialog.component';

@Component({
  selector: 'app-doctor-appointments',
  templateUrl: './doctor-appointments.component.html',
  styleUrls: ['./doctor-appointments.component.css']
})
export class DoctorAppointmentsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddOrEditAppointmentDialogComponent, {
      data: {isAdd: true},
      height: '600px',
      width: '1000px',
      //data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');
      //this.animal = result;
    });
  }
}
