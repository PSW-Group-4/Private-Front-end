import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { MapsFacade } from '../../maps.facade';
import { RoomMap } from '../../models/room-map.model';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css'],
})
export class EditItemComponent implements OnInit {
  // this.router.navigate(["id", id]); in parret component
  id: string = '';

  roomMaps$: Observable<RoomMap[]>;
  isUpdating$: Observable<boolean>;

  // Only for illustration purposes atm
  constructor(private route: ActivatedRoute, private mapsFacade: MapsFacade) { 
    this.roomMaps$ = mapsFacade.getRoomMaps$();
    this.isUpdating$ = mapsFacade.isUpdating$();
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => this.id = params['id']);
    this.mapsFacade.loadRoomMaps();
    this.mapsFacade.loadFloorMaps();
    this.mapsFacade.loadBuildingMaps();
  }

  updateRoomMap(entity: RoomMap) {
    this.mapsFacade.updateRoomMap(entity);
  }

  openDialog() {
    this.roomMaps$.forEach(element => {
      element.forEach(element => {
        console.log(element.id)
    })
  } )
  }
}
