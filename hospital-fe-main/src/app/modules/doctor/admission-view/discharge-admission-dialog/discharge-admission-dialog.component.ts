import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { getMatFormFieldMissingControlError } from '@angular/material/form-field';
import { AdmissionHistory } from 'src/app/modules/hospital/model/admission-history.model';
import { Admission } from 'src/app/modules/hospital/model/admission.model';
import { PatientRoomService } from 'src/app/modules/hospital/services/patient-room.service';
import { DoctorAppointmentService } from '../../doctor-appointments/doctor-appointment.service';


@Component({
  selector: 'app-discharge-admission-dialog',
  templateUrl: './discharge-admission-dialog.component.html',
  styleUrls: ['./discharge-admission-dialog.component.css']
})
export class DischargeAdmissionDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<DischargeAdmissionDialogComponent>,private doctorAppointmentService : DoctorAppointmentService, private patientRoomService : PatientRoomService) { }

  admission : Admission = new Admission;
  admissionHistory : AdmissionHistory = new AdmissionHistory;
  reason : string = '';

  ngOnInit(): void {
    this.getAdmission(); 
  }

  getAdmission():void{
    this.doctorAppointmentService.getAdmission(this.data.admissionId).subscribe(res => {
      this.admission = res;
    })
  }

  dischargeAdmission():void{
    this.reason = (<HTMLInputElement>document.getElementById("reasonName")).value;
    this.setAdmissionHistory();
  }

  setAdmissionHistory():void{
    this.admissionHistory.admissionId = this.data.admissionId;
    this.admissionHistory.dischargeReason = this.reason;
    this.admissionHistory.dischargeDate = (new Date()).toDateString();
    this.createAdmission();
  }

  createAdmission(): void{
    this.doctorAppointmentService.createAdmissionHistory(this.admissionHistory).subscribe(res =>{
      alert(res.id)
      this.patientRoomService.freeBed(this.admission.room).subscribe(res =>{
        alert("Krevet oslobodjen!");
      })
    })
  }
}
