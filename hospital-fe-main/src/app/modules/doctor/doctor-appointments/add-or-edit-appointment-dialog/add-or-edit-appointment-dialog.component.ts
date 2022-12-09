import { Component, getModuleFactory, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, _closeDialogVia } from '@angular/material/dialog';
import { Appointment } from '../../../hospital/model/appointment.model';
import { Patient } from '../../../hospital/model/patient.model';
import { DoctorAppointmentService } from '../doctor-appointment.service';
import {FormControl} from '@angular/forms';
import { Doctor } from '../../../hospital/model/doctor.model';
import { AcceptAppointmentScheduleDialogComponent } from '../accept-appointment-schedule-dialog/accept-appointment-schedule-dialog.component';
import { WrongInputDialogComponent } from './wrong-input-dialog/wrong-input-dialog.component';
import { formatDate } from '@angular/common';
import { DoctorService } from 'src/app/modules/hospital/services/doctor-service';

@Component({
  selector: 'app-add-or-edit-appointment-dialog',
  templateUrl: './add-or-edit-appointment-dialog.component.html',
  styleUrls: ['./add-or-edit-appointment-dialog.component.css']
})
export class AddOrEditAppointmentDialogComponent implements OnInit {

  public appointment: Appointment = new Appointment();
  public patients: Patient[]= [];
  public termins: Date[] = [];

  constructor(private doctorAppointmentService: DoctorAppointmentService,@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<AddOrEditAppointmentDialogComponent>,public dialog: MatDialog, private readonly doctorService: DoctorService) { }

  test?:string;
  selectedPatient = new Patient;
  selectedDate = new Date();
  selectedTermin = new Date();
  oldSelectedTermin = new Date();
  doctor = new Doctor;
  minDate = new Date();
  isDate = true;
  loggedDoctor: Doctor = new Doctor();
  isEdit = false;
  isTerminChanged = false;

  ngOnInit(): void {
    this.isDate = true;
    this.doctorService.getLoggedDoctor().subscribe(res => {
      this.loggedDoctor = res
    })
    this.doctorAppointmentService.getPatients().subscribe(res => {
      this.patients = res;
    })

    if(this.data.isAdd){
      this.test="Kreiranje pregleda"
    }else{
      this.test="Izmena pregleda"
      this.isEdit = true;
      this.doctorAppointmentService.getAppointment(this.data.appointmentId).subscribe(res => {
        this.selectedDate = new Date(res.schedule.dateTime);
        this.getSelectedDate();
        this.getSelectedPatient(res);
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
    if((this.appointment.patientId != '') && (this.appointment.schedule.dateTime != this.minDate.toString()) && (this.appointment.schedule.roomId != ''))
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
    this.doctorAppointmentService.getDoctor(this.loggedDoctor.id).subscribe(res => {
      this.doctor = res;
      this.setAppointment();
    })
  }

  getSelectedPatient = async (res: Appointment) => {
    this.doctorAppointmentService.getPatient(res.patientId).subscribe(res => {
      this.patients[0] = res
      this.selectedPatient = res;
    })
  }

  getSelectedDate = async () => {
    var formatedDate = this.selectedDate.toDateString();
    this.doctorAppointmentService.getTermins(formatedDate).subscribe(res => {
      this.termins= res;
      this.termins.push(this.selectedDate);
      this.selectedTermin = this.termins[this.termins.length - 1];
      this.termins.sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
      this.oldSelectedTermin = this.selectedTermin;
    })
    this.isDate = false;
  }

  checkTerminUpdate = (event: any) => {
    if (new Date(this.oldSelectedTermin).getTime() !== new Date(event.value).getTime())
      this.isTerminChanged = true;
    
    else
      this.isTerminChanged = false;
  }

  setAppointment = () => {
    if (this.isEdit){
      this.appointment.Id = this.data.appointmentId;
    }
    this.appointment.doctorId = this.doctor.id;
    this.appointment.patientId = this.selectedPatient.id;
    this.appointment.schedule.roomId = this.doctor.room.id.toString();
    this.appointment.schedule.dateTime = this.selectedTermin.toString();
    this.checkAppointment();
  }

  createAppointment = () =>{
    const dialogRef = this.dialog.open(AcceptAppointmentScheduleDialogComponent, {
      data: {appointment: this.appointment,
            dialog: this.dialogRef,
            isEdit: this.isEdit},
      height: '200px',
      width: '400px'
    });
  }
}
