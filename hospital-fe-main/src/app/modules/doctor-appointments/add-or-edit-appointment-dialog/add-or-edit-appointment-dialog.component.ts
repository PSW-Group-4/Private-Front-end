import { Component, getModuleFactory, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, _closeDialogVia } from '@angular/material/dialog';
import { Appointment } from '../../hospital/model/appointment.model';
import { Patient } from '../../hospital/model/patient.model';
import { DoctorAppointmentService } from '../doctor-appointment.service';
import {FormControl} from '@angular/forms';
import { Doctor } from '../../hospital/model/doctor.model';
import { AcceptAppointmentScheduleDialogComponent } from '../accept-appointment-schedule-dialog/accept-appointment-schedule-dialog.component';
import { WrongInputDialogComponent } from './wrong-input-dialog/wrong-input-dialog.component';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-add-or-edit-appointment-dialog',
  templateUrl: './add-or-edit-appointment-dialog.component.html',
  styleUrls: ['./add-or-edit-appointment-dialog.component.css']
})
export class AddOrEditAppointmentDialogComponent implements OnInit {

  public appointment: Appointment = new Appointment();
  public patients: Patient[]= [];
  public termins: Date[] = [];

  constructor(private doctorAppointmentService: DoctorAppointmentService,@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<AddOrEditAppointmentDialogComponent>,public dialog: MatDialog) { }

  test?:string;
  selectedPatient = new Patient;
  selectedDate = new Date();
  selectedTermin = new Date();
  doctor = new Doctor;
  minDate = new Date();
  isDate = true;
  doctorId = '1412c639-c5e1-47a1-b29b-1fe935536612';
  isEdit = false;

  ngOnInit(): void {
    this.isDate = true;
    this.doctorAppointmentService.getPatients().subscribe(res => {
      this.patients = res;
    })

    if(this.data.isAdd){
      this.test="Kreiranje pregleda"
    }else{
      this.test="Izmena pregleda"
      this.isEdit = true;
      this.doctorAppointmentService.getAppointment(this.data.appointmentId).subscribe(res => {
        this.selectedDate = new Date(res.dateTime);

        var formatedDate = this.selectedDate.toDateString();
        this.doctorAppointmentService.getTermins(formatedDate).subscribe(res => {
          this.termins= res;
          this.termins.push(this.selectedDate);
          this.selectedTermin = this.termins[this.termins.length - 1];
        })
        this.isDate = false;
        
        this.doctorAppointmentService.getPatient(res.patientId).subscribe(res => {
          this.patients[0] = res
          this.selectedPatient = res;
        })
      })
    }
  }

  getTermins = (event: any) => {
    if(this.selectedPatient.name != ''){
    var formatedDate = new Date(event.target.value).toDateString();
    this.doctorAppointmentService.getTermins(formatedDate).subscribe(res => {
      this.termins= res;
    })
    this.isDate = false;
    }
  }

  scheduleAppointment = async () =>{
    this.getDoctor();
  }

  checkAppointment = () =>{
    if((this.appointment.patientId != '') && (this.appointment.dateTime != this.minDate.toString()) && (this.appointment.roomId != ''))
      this.createAppointment();
    else {
      const dialogRef = this.dialog.open(WrongInputDialogComponent, {
        data: {},
        height: '200px',
        width: '400px',
        //data: {name: this.name, animal: this.animal},
      });
    }
  }

  getDoctor = async () =>{
    this.doctorAppointmentService.getDoctor(this.doctorId).subscribe(res => {
      this.doctor = res;
      this.setAppointment();
    })
  }

  setAppointment = () => {
    if (this.isEdit){
      this.appointment.Id = this.data.appointmentId;
      console.log(this.appointment.Id);
    }
    this.appointment.doctorId = this.doctor.id;
    this.appointment.patientId = this.selectedPatient.id;
    this.appointment.roomId = this.doctor.room.id.toString();
    this.appointment.dateTime = this.selectedTermin.toString();
    this.checkAppointment();
  }

  createAppointment = () =>{
    const dialogRef = this.dialog.open(AcceptAppointmentScheduleDialogComponent, {
      data: {appointment: this.appointment,
             dialog: this,
            isEdit: this.isEdit},
      height: '200px',
      width: '400px',
      //data: {name: this.name, animal: this.animal},
    });
  }
}
