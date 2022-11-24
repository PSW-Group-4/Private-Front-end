import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { catchError, EMPTY } from 'rxjs';
import { Vacation } from '../../hospital/model/vacation.model';
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

  doctorId = 'e6fbebce-dd68-11e4-9e38-c66b98cc8197'

  constructor(private doctorVacationService: DoctorVacationService, public dialogRef: MatDialogRef<AddVacationDialogComponent>) { }

  ngOnInit(): void {
  }

  public createVacation(): void {
    this.vacation.doctorId = this.doctorId;
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
