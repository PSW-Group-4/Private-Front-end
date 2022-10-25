import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Doctor } from '../model/doctor.model';
import { Room } from '../model/room.model';
import { RoomService } from '../services/room.service';

@Component({
  selector: 'app-doctor-current-app',
  templateUrl: './doctor-current-app.component.html',
  styleUrls: ['./doctor-current-app.component.css']
})
export class DoctorCurrentAppComponent implements OnInit {


  //@Input() presentAppointment:Boolean | undefined
  //noviPregledi!: Boolean;
  //condition = false;

  public dataSource = new MatTableDataSource<Doctor>();
  public displayedColumns = ['number', 'floor', 'update', 'delete'];
  public doctors: Doctor[] = [];

  constructor(private roomService: RoomService) { }

  ngOnInit(): void {
    this.showCurrentAppointment();
  }

  public showCurrentAppointment(): void {
    this.roomService.getDoctors().subscribe(res => {
      this.doctors = res;
      this.dataSource.data = this.doctors;
    })
  }

}
