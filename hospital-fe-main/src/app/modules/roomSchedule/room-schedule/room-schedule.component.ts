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

  renovationAppointments: Appointment[] = [];
  filteredRenovationAppointments: Appointment[] = [];

  consiliumAppointments:Appointment[] = [];
  filteredConsiliumAppointments: Appointment[] = [];

  constructor(private dialogRef: MatDialogRef<RoomScheduleComponent>, @Inject(MAT_DIALOG_DATA) data : any, private service:RoomScheduleService) {
    this.clickedRoom = data.room;
    
   }

  ngOnInit(): void {
    
    this.getMoveEquipmentAppointments();
    this.getRenovationAppointments();
    this.getMedicalAppointments();

    
  }

  getMoveEquipmentAppointments(){
    this.service.getMoveEquipmentAppointment().subscribe(res =>{
      this.moveEquipmentAppointments = res;
      for(var i = 0; i < this.moveEquipmentAppointments.length; i++){
        if(this.moveEquipmentAppointments[i].room.id == this.clickedRoom.id && !this.moveEquipmentAppointments[i].isDone)
          this.filteredMoveEquipmentAppointemts.push(this.moveEquipmentAppointments[i]);
      }
    });
  }

  getRenovationAppointments(){
    this.service.getRenovationAppointments().subscribe(res=>{
      this.renovationAppointments = res;
      for(var i = 0; i < this.renovationAppointments.length; i++){
        if(this.renovationAppointments[i].room.id == this.clickedRoom.id && !this.renovationAppointments[i].isDone)
          this.filteredRenovationAppointments.push(this.renovationAppointments[i]);
      }
    });
  }
  getMedicalAppointments(){
    this.service.getConsiliumAppointments().subscribe(res => {
      this.consiliumAppointments = res;
      for(var i = 0; i < this.consiliumAppointments.length; i++){
        if(this.consiliumAppointments[i].room.id == this.clickedRoom.id && !this.consiliumAppointments[i].isDone)
          this.filteredConsiliumAppointments.push(this.consiliumAppointments[i]);
      }
    })
  }

  getConsiliumAppointments(){
    this.service.getMedicalAppointments().subscribe(res => {
      this.medicalAppointments = res;
      for(var i = 0; i < this.medicalAppointments.length; i++){
        if(this.medicalAppointments[i].room.id == this.clickedRoom.id && !this.medicalAppointments[i].isDone)
          this.filteredMedicalAppointemts.push(this.medicalAppointments[i]);
      }
    })
  }

  cancelMoveEquipmentAppointment(id:any){
    this.service.deleteMoveEquipmentAppointment(id).subscribe(res=>{
      
    }
    );
    
  }
  cancelRenovationAppointment(id:any){
    this.service.deleteRenovationAppointment(id).subscribe(res=>{
      
    }
    );
    
  }

  check(date:Date){
    //console.log( new Date(Date.parse(this.dateAsYYYYMMDDHHNNSS(this.today))))
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
