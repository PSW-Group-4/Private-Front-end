import { Room } from './../../models/room.model';
import { RoomMapService } from './../../services/room-map.service';
import { Component, Inject, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RoomMap } from '../../models/room-map.model';


@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css'],
})
export class EditItemComponent implements OnInit {
  //public room: Room = new Room();
  
  @Input() room: RoomMap;
  @Output() roomOutput = new Room;

  constructor(private route: ActivatedRoute, private router: Router,
     private roomService: RoomMapService, private dialogRef: MatDialogRef<EditItemComponent>, @Inject(MAT_DIALOG_DATA) data : any) {
        this.room = data.room
        this.roomOutput = data.room
     }

  ngOnInit(): void {
    
  }
  
  public updateRoom(): void {
    this.roomService.updateRoom(this.roomOutput).subscribe(res => {
    });
  }

}
