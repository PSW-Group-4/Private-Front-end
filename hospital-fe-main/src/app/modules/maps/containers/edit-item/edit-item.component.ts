import { UpdateRoomComponent } from './../../../hospital/update-room/update-room.component';
import { Room } from './../../models/room.model';
import { RoomMapService } from './../../services/room-map.service';
import { RoomService } from './../../../hospital/services/room.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FloorMap } from '../../models/floor-map.model';
import { Observable } from 'rxjs/internal/Observable';


@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css'],
})
export class EditItemComponent implements OnInit {
  //public room: Room = new Room();
  
  @Input() room = new Room;


  constructor(private route: ActivatedRoute, private router: Router,
     private roomService: RoomMapService) {}

  ngOnInit(): void {
    

}

  public updateRoom(): void {
    this.roomService.updateRoom(this.room).subscribe(res => {
      this.router.navigate(['/buildings']);
    });
  }

}
