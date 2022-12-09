import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { catchError, EMPTY } from 'rxjs';
import { Doctor } from 'src/app/modules/hospital/model/doctor.model';
import { Vacation } from 'src/app/modules/hospital/model/vacation.model';
import { DoctorService } from 'src/app/modules/hospital/services/doctor-service';
//import { Vacation } from '../../hospital/model/vacation.model';
import { DoctorVacationService } from '../doctor-vacation.service';

@Component({
  selector: 'app-add-vacation-dialog',
  templateUrl: './add-vacation-dialog.component.html',
  styleUrls: ['./add-vacation-dialog.component.css']
})
export class AddVacationDialogComponent implements OnInit {

  startDate:string = '';
  endDate:string = '';
  reason:string = '';
  urgent:boolean = false;
  greska:string = '';

  vacation:Vacation = new Vacation();

  loggedDoctor: Doctor = new Doctor();

  constructor(private doctorVacationService: DoctorVacationService, public dialogRef: MatDialogRef<AddVacationDialogComponent>, private readonly doctorService: DoctorService) { }

  ngOnInit(): void {
    this.doctorService.getLoggedDoctor().subscribe(res => {
      this.loggedDoctor = res
    })
  }

  public createVacation(): void {
    this.vacation.doctorId = this.loggedDoctor.id;
    this.vacation.dateStart = this.startDate;
    this.vacation.dateEnd = this.endDate;
    this.vacation.deniedRequestReason = "";
    this.vacation.vacationStatus = 0;
    this.vacation.reason = this.reason;
    this.vacation.urgent = this.urgent;
    this.doctorVacationService.createVacation(this.vacation).pipe(
      catchError(() => {
        this.greska = "Tada ne mozete zakazati godisnji"
        return EMPTY;
      })
    ).subscribe(res => {
      this.dialogRef.close();
    })
  }

}
