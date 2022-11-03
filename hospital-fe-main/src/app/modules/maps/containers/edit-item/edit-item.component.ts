import { RoomService } from './../../../hospital/services/room.service';
import { Room } from './../../../hospital/model/room.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css'],
})
export class EditItemComponent implements OnInit {
  // this.router.navigate(["id", id]); in parret component
  public room: Room | undefined = undefined;

  // roomMaps$: Observable<FloorMap[]>;
  // isUpdating$: Observable<boolean>;

  constructor(private route: ActivatedRoute, private router: Router,
     private roomService: RoomService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.roomService.getRoom(params['id']).subscribe(res => {
        this.room = res;
      })
    });
  }

  // updateRoomMap(entity: RoomMap) {
  //   this.mapsFacade.updateRoomMap(entity);
  // }

  public updateRoom(): void {
    this.roomService.updateRoom(this.room).subscribe(res => {
      this.router.navigate(['/rooms']);
    });
  }

}
