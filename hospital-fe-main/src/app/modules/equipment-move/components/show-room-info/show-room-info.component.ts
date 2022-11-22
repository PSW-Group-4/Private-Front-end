import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { EquiptmentDialogComponent } from 'src/app/modules/shared/components/equiptment-dialog/equiptment-dialog.component';
import { Room } from 'src/app/modules/shared/model/room.model';
@Component({
  selector: 'app-show-room-info',
  templateUrl: './show-room-info.component.html',
  styleUrls: ['./show-room-info.component.css']
})
export class ShowRoomInfoComponent implements OnInit {
  @Input() selectedRoom : Observable<Room> = new Observable<Room>;
  room : Room = new Room();
  constructor( public dialog: MatDialog) { }


  ngOnInit(): void {
    this.selectedRoom.subscribe({
      next : (v) => {
        this.room = v;
      }
    })
  }

  openEqipmentDialog() {
    const dialogConf = new MatDialogConfig();

    dialogConf.data = {
      room: this.room,
    };
    dialogConf.width = "700px";
    dialogConf.height = "800px";
    this.dialog.open(EquiptmentDialogComponent , dialogConf);
  }

}
