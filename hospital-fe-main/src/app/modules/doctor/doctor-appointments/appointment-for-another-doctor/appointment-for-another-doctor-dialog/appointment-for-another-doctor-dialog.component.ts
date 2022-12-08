import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Doctor } from 'src/app/modules/hospital/model/doctor.model';
import { Patient } from 'src/app/modules/hospital/model/patient.model';
import { PatientRoomService } from 'src/app/modules/hospital/services/patient-room.service';
import { PatientService } from 'src/app/modules/hospital/services/patient.service';
import { AddOrEditAppointmentDialogComponent } from '../../add-or-edit-appointment-dialog/add-or-edit-appointment-dialog.component';
import { DoctorAppointmentService } from '../../doctor-appointment.service';

@Component({
  selector: 'app-appointment-for-another-doctor-dialog',
  templateUrl: './appointment-for-another-doctor-dialog.component.html',
  styleUrls: ['./appointment-for-another-doctor-dialog.component.css']
})
export class AppointmentForAnotherDoctorDialogComponent implements OnInit {

  public patients: Patient[]= [];
  public doctors: Doctor[]= [];
  public termins: Date[] = [];
  constructor(private patientService: PatientService, private doctorAppointmentService: DoctorAppointmentService,@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<AddOrEditAppointmentDialogComponent>,public dialog: MatDialog) { }

  selectedPatient = new Patient;
  selectedDoctor = new Doctor;
  selectedTermin = new Date();
  minDate = new Date();
  ngOnInit(): void {
    this.patientService.getPatients().subscribe(res => {
      this.patients = res;
    })

    this.doctorAppointmentService.getDoctors().subscribe(res => {
      this.doctors = res;
    })
  }

  getTermins = (event: any) => {
    if(this.selectedPatient.name != ''){
    var formatedDate = new Date(event.target.value).toDateString();
    this.doctorAppointmentService.getTermins(formatedDate).subscribe(res => {
      this.termins= res;
    })
    //this.isDate = false;
    }
  }

}
