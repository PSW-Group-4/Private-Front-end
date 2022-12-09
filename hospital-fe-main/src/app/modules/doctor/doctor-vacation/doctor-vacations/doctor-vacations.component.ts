import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddVacationDialogComponent } from '../add-vacation-dialog/add-vacation-dialog.component';
import { DoctorVacationService } from '../doctor-vacation.service';

@Component({
  selector: 'app-doctor-vacations',
  templateUrl: './doctor-vacations.component.html',
  styleUrls: ['./doctor-vacations.component.css']
})
export class DoctorVacationsComponent implements OnInit {

  constructor(private doctorVacationService: DoctorVacationService, public dialog: MatDialog) { }

  doctorId = 'e6fbebce-dd68-11e4-9e38-c66b98cc8197'

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
      // osvjezi Waiting_for_approval requeste
      this.doctorVacationService.GetDoctorVacationsFromSpecificStatus(0,this.doctorId).subscribe(res =>{
      })

      
    });
  }
}
