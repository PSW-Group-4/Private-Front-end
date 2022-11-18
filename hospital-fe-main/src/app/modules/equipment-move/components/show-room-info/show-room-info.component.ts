import { Component, Input, OnInit } from '@angular/core';
import { Room } from 'src/app/modules/shared/model/room.model';
@Component({
  selector: 'app-show-room-info',
  templateUrl: './show-room-info.component.html',
  styleUrls: ['./show-room-info.component.css']
})
export class ShowRoomInfoComponent implements OnInit {
  @Input() selectedRoom : Room = new Room;

  constructor() { }

  ngOnInit(): void {
  }

  openEqipmentDialog() {
    throw new Error('Method not implemented.');
  }

}
