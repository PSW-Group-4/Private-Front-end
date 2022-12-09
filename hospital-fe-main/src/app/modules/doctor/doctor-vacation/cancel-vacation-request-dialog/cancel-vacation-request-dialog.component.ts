import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DoctorVacationService } from '../doctor-vacation.service';

@Component({
  selector: 'app-cancel-vacation-request-dialog',
  templateUrl: './cancel-vacation-request-dialog.component.html',
  styleUrls: ['./cancel-vacation-request-dialog.component.css']
})
export class CancelVacationRequestDialogComponent implements OnInit {

  constructor(private doctorVacationService: DoctorVacationService, @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<CancelVacationRequestDialogComponent>) { }

  ngOnInit(): void {
  }

  cancelAppointment(){
    this.doctorVacationService.deleteDoctorsPendingVacationReques(this.data.vacationId).subscribe(res =>{
      this.dialogRef.close();
    })
  }
}
