import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DoctorAppointmentService } from '../doctor-appointment.service';

@Component({
  selector: 'app-accept-appointment-schedule-dialog',
  templateUrl: './accept-appointment-schedule-dialog.component.html',
  styleUrls: ['./accept-appointment-schedule-dialog.component.css']
})
export class AcceptAppointmentScheduleDialogComponent implements OnInit {

  constructor(private doctorAppointmentService: DoctorAppointmentService, @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<AcceptAppointmentScheduleDialogComponent>) { }

  ngOnInit(): void {
  }

  scheduleAppointment = () => {
    this.doctorAppointmentService.createAppointment(this.data.appointment).subscribe(res =>{
      this.dialogRef.close();
      this.data.dialog.close();
    })
  }
}
