import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, shareReplay, Subject } from 'rxjs';
import { EquipmentList } from 'src/app/modules/shared/model/equipment-list.model';
import { Equipment } from 'src/app/modules/shared/model/equipment.model';
import { Room } from 'src/app/modules/shared/model/room.model';
import { EquipmentMoveFacade } from '../../equipment-move.facade';

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
  

  constructor(private facade : EquipmentMoveFacade) { }

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
    

}
