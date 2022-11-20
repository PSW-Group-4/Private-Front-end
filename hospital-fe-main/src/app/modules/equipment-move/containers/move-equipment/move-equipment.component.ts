import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, shareReplay, Subject } from 'rxjs';
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
  }
  resestDestinationForm() {
    this.selectedDestination.next(this.destination);
  }

}
