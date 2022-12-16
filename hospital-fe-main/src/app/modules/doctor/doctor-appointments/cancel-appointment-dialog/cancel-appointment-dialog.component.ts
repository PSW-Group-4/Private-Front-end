import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DoctorAppointmentService } from '../doctor-appointment.service';

@Component({
  selector: 'app-cancel-appointment-dialog',
  templateUrl: './cancel-appointment-dialog.component.html',
  styleUrls: ['./cancel-appointment-dialog.component.css']
})
export class CancelAppointmentDialogComponent implements OnInit {

  constructor(private doctorAppointmentService: DoctorAppointmentService, @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<CancelAppointmentDialogComponent>) { }

  ngOnInit(): void {
    
  }

  cancelAppointment(){
    this.doctorAppointmentService.deleteAppointmentEndSendNotification(this.data.appointmentId).subscribe(res =>{
      this.dialogRef.close();
    })
  }
}
