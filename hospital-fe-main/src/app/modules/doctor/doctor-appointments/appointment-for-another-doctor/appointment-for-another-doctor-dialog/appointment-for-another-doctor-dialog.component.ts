import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/modules/hospital/model/appointment.model';
import { DateRange } from 'src/app/modules/hospital/model/daterange.model';
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
  public spetialities: string[] = [];
  public appointment: Appointment = new Appointment();
  constructor (private patientService: PatientService, private doctorAppointmentService: DoctorAppointmentService,@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<AddOrEditAppointmentDialogComponent>,public dialog: MatDialog, private router: Router) { }

  selectedStartDate:any;
  selectedEndDate:any;
  selectedPatient = new Patient;
  selectedDoctor = new Doctor;
  selectedTermin = new Date();
  selectedSpetiality = new String;
  minDate = new Date();
  ngOnInit(): void {
    this.patientService.getPatients().subscribe(res => {
      this.patients = res;
    })

    // this.doctorAppointmentService.getDoctors().subscribe(res => {
    //   this.doctors = res;
    // })

    this.doctorAppointmentService.getSpecialities().subscribe(res => {
      this.spetialities = res;
    })
  }

  // getTermins = (event: any) => {
  //   if(this.selectedPatient.name != ''){
  //   var formatedDate = new Date(event.target.value).toDateString();
  //   this.doctorAppointmentService.getTermins(formatedDate).subscribe(res => {
  //     this.termins = [];
  //     for(var r of res){
  //       this.termins.push(r.startTime);
  //     }
  //   })
  //   //this.isDate = false;
  //   }
  // }
  getDoctors():void {
    this.doctorAppointmentService.getDoctors().subscribe(res => {
      this.doctors = [];
      for(var d of res){
        
          if(d.speciality === this.selectedSpetiality){
            this.doctors.push(d);
          }
        
      }
    })
  }

  getTerminsForAnotherDoctor = async () => {
    if(this.selectedDoctor != null && this.selectedPatient != null){
      var formatedDate1 = new Date(this.selectedStartDate).toDateString();
      var formatedDate2 = new Date(this.selectedEndDate).toDateString();
      console.log(formatedDate1);
      this.doctorAppointmentService.getTerminsForAnotherDoctor(formatedDate1, formatedDate2, this.selectedPatient.id, this.selectedDoctor.id).subscribe(res => {
        this.termins = [];
        for(var r of res){
          this.termins.push(r.startTime);
        }
      })
    } else {
      console.log('nisam usao');
    }
    
  }

  setAppointment():void {
    // if (this.isEdit){
    //   this.appointment.Id = this.data.appointmentId;
    // }
    this.appointment.doctorId = this.selectedDoctor.id;
    this.appointment.patientId = this.selectedPatient.id;
    this.appointment.roomId = this.selectedDoctor.room.id.toString()
    this.appointment.startTime = this.selectedTermin.toLocaleString()    
  }

  createAppointment():void{  
    
    if(this.checkFrom() == false){
      alert('Popunite sva polja!');
      return;
    }
    this.setAppointment();
    this.doctorAppointmentService.createAppointment(this.appointment).subscribe(res =>{
      //this.router.navigate(['doctor/appointments']);      
      this.dialog.closeAll();
    })
  }

  checkFrom(): boolean {
    if(this.selectedDoctor.id === '' || this.selectedPatient.id === '' || this.selectedStartDate === undefined || this.selectedEndDate === undefined || this.selectedTermin <= new Date()){
      return false;
    }
    return true;
  }

}
