import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AcceptAppointmentScheduleDialogComponent } from '../../accept-appointment-schedule-dialog/accept-appointment-schedule-dialog.component';
import { DoctorAppointmentService } from '../../doctor-appointment.service';

@Component({
  selector: 'app-wrong-input-dialog',
  templateUrl: './wrong-input-dialog.component.html',
  styleUrls: ['./wrong-input-dialog.component.css']
})
export class WrongInputDialogComponent implements OnInit {

  constructor(private doctorAppointmentService: DoctorAppointmentService, @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<AcceptAppointmentScheduleDialogComponent>) { }

  ngOnInit(): void {
  }

}
