import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Doctor } from 'src/app/modules/hospital/model/doctor.model';
import { DoctorService } from 'src/app/modules/hospital/services/doctor-service';
import { AddVacationDialogComponent } from '../add-vacation-dialog/add-vacation-dialog.component';
import { DoctorVacationService } from '../doctor-vacation.service';

@Component({
  selector: 'app-doctor-vacations',
  templateUrl: './doctor-vacations.component.html',
  styleUrls: ['./doctor-vacations.component.css']
})
export class DoctorVacationsComponent implements OnInit {

  constructor(private doctorVacationService: DoctorVacationService, public dialog: MatDialog, private readonly doctorService: DoctorService) { }

  loggedDoctor: Doctor = new Doctor()

  ngOnInit(): void {
    this.doctorService.getLoggedDoctor().subscribe(res => {
      this.loggedDoctor = res
    })
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
      this.doctorVacationService.GetDoctorVacationsFromSpecificStatus(0, this.loggedDoctor.id).subscribe(res =>{
      })      
    });
  }
}
