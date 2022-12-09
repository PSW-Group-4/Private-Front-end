import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddConsiliumDialogComponent } from '../add-consilium-dialog/add-consilium-dialog.component';

@Component({
  selector: 'app-doctor-consiliums',
  templateUrl: './doctor-consiliums.component.html',
  styleUrls: ['./doctor-consiliums.component.css']
})
export class DoctorConsiliumsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddConsiliumDialogComponent, {
      height: '400px',
      width: '600px',
      //data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');
      //this.animal = result;
      // osvjezi Waiting_for_approval requeste
      //this.doctorVacationService.GetDoctorVacationsFromSpecificStatus(0,this.doctorId).subscribe(res =>{})

      
    });
  }

}
