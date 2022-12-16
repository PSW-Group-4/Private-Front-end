import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BehaviorSubject, Observable, shareReplay, Subject } from 'rxjs';
import { EquipmentList } from 'src/app/modules/shared/model/equipment-list.model';
import { Equipment } from 'src/app/modules/shared/model/equipment.model';
import { Room } from 'src/app/modules/shared/model/room.model';
import { EquipmentMoveFacade } from '../../equipment-move.facade';
import { MoveEquipmentTask } from '../../model/move-equipment-task.model';
import { EquipmentRelocationService } from '../../service/equipment-relocation.service';

@Component({
  selector: 'app-move-equipment',
  templateUrl: './move-equipment.component.html',
  styleUrls: ['./move-equipment.component.css']
})
export class MoveEquipmentComponent implements OnInit {

  roomList : Room[] = [];
  selectedSource: BehaviorSubject<Room> = new BehaviorSubject(new Room);
  source : Room = new Room();

  selectedDestination : BehaviorSubject<Room> = new BehaviorSubject(new Room);
  destination : Room = new Room();

  selectedEquipment : EquipmentList = new EquipmentList();
  amount : number = 0;

  amountList : number[] = []
  minDate : Date = new Date(new Date().getFullYear(),new Date().getMonth(), new Date().getDate() + 2);
  duration: number = 15;
  
  numberValidator = new FormControl('', [
    Validators.required,
    Validators.pattern('[0-9]+'),
  ]);

  dates: Date[] = [];
  formattedDate :String ='';
  relocationStart:Date = new Date;
  selectedRelocationStart: Date = new Date;
  constructor(private facade : EquipmentMoveFacade, private equipmentRelocationService: EquipmentRelocationService) { }

  ngOnInit(): void {
    this.facade.getRooms$().subscribe({
      next : (v) => {
        this.roomList = v;
      }
    })
    this.facade.getSelectedRoom$().subscribe({
      next: (v) => {
        this.source = v;
        this.resestSourceForm();
      }
    })
  }

  resestSourceForm() {
    this.selectedSource.next(this.source);
    this.selectedEquipment = new EquipmentList();
    this.amountList = [];
  }

  resestDestinationForm() {
    this.selectedDestination.next(this.destination);
  }

  setEquipment($event: EquipmentList) {
    this.selectedEquipment = $event;
    this.amountList = Array(this.selectedEquipment.amount).fill(this.selectedEquipment.amount).map((x,i) => i + 1);
  }
  
  recommendRelocation(){
    this.formattedDate = this.dateAsYYYYMMDDHHNNSS(this.relocationStart);
    this.equipmentRelocationService.getAllRecommendations(this.formattedDate, this.duration, this.source.id, this.destination.id).subscribe(res=>{
      this.dates = res;
    });
  }

  confirmRelocation() {
    var data : MoveEquipmentTask = new MoveEquipmentTask(); 
    data.Date = this.selectedRelocationStart;
    data.Duration = this.duration;
    data.Amount = this.amount;
    data.Equipment = this.selectedEquipment.equipment.id;
    data.Source = this.source.id;
    data.Destination = this.destination.id;
    this.facade.createTask$(data).subscribe(
      {
        complete: () => {
          alert('DONE')
          location.reload()
        }
      }
    );
  }
  
  // https://stackoverflow.com/questions/40526102/how-do-you-format-a-date-time-in-typescript
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
  selectDate(){
    console.log(this.selectedRelocationStart);
  }
}
