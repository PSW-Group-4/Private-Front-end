import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef,  MAT_DIALOG_DATA  } from '@angular/material/dialog';
import { Room } from '../../shared/model/room.model';
import { Appointment } from '../appointment.model';

import { RoomScheduleService } from '../room-schedule.service';

@Component({
  selector: 'app-room-schedule',
  templateUrl: './room-schedule.component.html',
  styleUrls: ['./room-schedule.component.css']
})
export class RoomScheduleComponent implements OnInit {

  displayedColumns = ['id'];
  clickedRoom: Room = new Room;  
  today = new Date();

  moveEquipmentAppointments: Appointment[] = [];
  filteredMoveEquipmentAppointemts: Appointment[] = [];
  

  medicalAppointments: Appointment[] = [];
  filteredMedicalAppointemts: Appointment[] = [];

  constructor(private dialogRef: MatDialogRef<RoomScheduleComponent>, @Inject(MAT_DIALOG_DATA) data : any, private service:RoomScheduleService) {
    this.clickedRoom = data.room;
    
   }

  ngOnInit(): void {
    this.service.getMoveEquipmentAppointment().subscribe(res =>{
      this.moveEquipmentAppointments = res;
      for(var i = 0; i < this.moveEquipmentAppointments.length; i++){
        if(this.moveEquipmentAppointments[i].room.id == this.clickedRoom.id)
          this.filteredMoveEquipmentAppointemts.push(this.moveEquipmentAppointments[i]);
      }
    });

    this.service.getMedicalAppointments().subscribe(res => {
      this.medicalAppointments = res;
      for(var i = 0; i < this.moveEquipmentAppointments.length; i++){
        if(this.medicalAppointments[i].room.id == this.clickedRoom.id)
          this.filteredMedicalAppointemts.push(this.medicalAppointments[i]);
      }
    })
  }


  cancelMoveEquipmentAppointment(id:any){
    this.service.deleteMoveEquipmentAppointment(id).subscribe();
  }

  check(date:Date){
    console.log(date);
    console.log( new Date(Date.parse(this.dateAsYYYYMMDDHHNNSS(this.today))))
    if(new Date(date) > this.today){
      return true;
    }
    return false;
  }

  dateAsYYYYMMDDHHNNSS(date:any): string {
    return date.getFullYear()
              + '-' + this.leftpad(date.getMonth() + 1)
              + '-' + this.leftpad(date.getDate())
              + 'T' + this.leftpad(date.getHours())
              + ':' + this.leftpad(date.getMinutes())
              + ':' + this.leftpad(date.getSeconds());
  }
  leftpad(val:any, resultLength = 2, leftpadChar = '0'): string {
    return (String(leftpadChar).repeat(resultLength)
          + String(val)).slice(String(val).length);
  }
}
