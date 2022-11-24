import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdmissionHistory } from 'src/app/modules/hospital/model/admission-history.model';
import { Admission } from 'src/app/modules/hospital/model/admission.model';
import { DoctorAppointmentService } from '../../../doctor-appointments/doctor-appointment.service';

@Component({
  selector: 'app-treatment-dialog',
  templateUrl: './treatment-dialog.component.html',
  styleUrls: ['./treatment-dialog.component.css']
})
export class TreatmentDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<TreatmentDialogComponent>,private doctorAppointmentService : DoctorAppointmentService) { }

  admissionHistory: AdmissionHistory = new AdmissionHistory;
  admission: Admission = new Admission;

  ngOnInit(): void {
    this.doctorAppointmentService.getAdmissionHistory(this.data.admissionHistoryId).subscribe(res => {
      this.admissionHistory = res;
      this.doctorAppointmentService.getAdmission(this.admissionHistory.admissionId).subscribe(res =>{
        this.admission = res;
      })
    })
 
  }

  generatePdf(id:any): void{
    this.doctorAppointmentService.generatePdf(this.data.admissionHistoryId).subscribe(data=>{
        let fileName = 'medicalReport';
        let blob: Blob = data.body as Blob;
        let a = document.createElement('a');
        a.download=fileName;
        a.href = window.URL.createObjectURL(blob);
        a.click();
    }
  )}

}
