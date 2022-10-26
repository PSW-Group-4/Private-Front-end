import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Doctor } from '../model/doctor.model';
import { Room } from '../model/room.model';
import { RoomService } from '../services/room.service';

import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { EditAppointmentForDoctorComponent } from '../edit-appointment-for-doctor/edit-appointment-for-doctor.component';
import { DeleteAppointmentForDoctorComponent } from '../delete-appointment-for-doctor/delete-appointment-for-doctor.component';
import { Appointment } from '../model/appointment.model';

@Component({
  selector: 'app-doctor-current-app',
  templateUrl: './doctor-current-app.component.html',
  styleUrls: ['./doctor-current-app.component.css']
})
export class DoctorCurrentAppComponent implements OnInit {


  //@Input() presentAppointment:Boolean | undefined
  //noviPregledi!: Boolean;
  //condition = false;

  public dataSource = new MatTableDataSource<Appointment>();
  public displayedColumns : string[] = [];
  //public isCurrentAppointment : boolean | undefined
  public doctors: Doctor[] = [];
  public rooms: Room[] = [];
  public appointments: Appointment[] = [];

  constructor(private roomService: RoomService, public dialog: MatDialog) { }

  @Input() isCurrentAppointment:boolean | undefined
  
  ngOnInit(): void {
    this.changeDispledTable();
    
  }


  changeDispledTable() {
    if(this.isCurrentAppointment){
      this.displayedColumns = ['number', 'floor', 'update', 'delete'];
      this.showCurrentAppointment();
    }else{
      this.displayedColumns = ['number', 'floor'];
      this.showOldAppointment();
    }
  }

  public showCurrentAppointment(): void {
    this.roomService.getAppointments().subscribe(res => {
      this.appointments = res;
      this.dataSource.data = this.appointments;
    })
  }

  public showOldAppointment(): void {
    this.roomService.getAppointments().subscribe(res => {
      this.appointments = res;
      this.dataSource.data = this.appointments;
    })
  }

  openEditDialog(): void {
    const dialogRef = this.dialog.open(EditAppointmentForDoctorComponent, {
      height: '600px',
      width: '1000px',
      //data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');
      //this.animal = result;
    });
  }

  openDeleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteAppointmentForDoctorComponent, {
      height: '200px',
      width: '400px',
      //data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');
      //this.animal = result;
    });
  }

}
