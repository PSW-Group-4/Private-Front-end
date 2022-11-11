import { Component, OnInit } from '@angular/core';
import { RoomMap } from '../../models/room-map.model';
import { MapsFacade } from '../../maps.facade';
import { Router } from '@angular/router';
import { Floor } from '../../models/floor.model';
import { FloorMap } from '../../models/floor-map.model';
import { BuildingMap } from '../../models/building-map.model';
import { delay } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  maps$:RoomMap[]=[];
  searchText = '';
  floors : FloorMap[] = [];
  buildings : BuildingMap[] = [];
  constructor(private router: Router, private mapsFacade:MapsFacade) {
      this.mapsFacade.getFloorMaps$().subscribe({
        next : (v) => this.floors = v
      })
      this.mapsFacade.getBuildingMaps$().subscribe({
        next : (v) => this.buildings = v
      })
   }

  ngOnInit(): void {
    this.mapsFacade.getRoomMaps$().subscribe(res=>{
      this.maps$ = res;
    })
  }

  highlight(room: RoomMap){
    this.router.navigate([this.getUrl(room)]).then(() => 
      this.mapsFacade.setSelectedRoomMap(room)
    );
  }

  getUrl(roomMap: RoomMap): string {
    var buildingId = '';
    this.buildings.forEach(building => {
      building.building.floorList.forEach(floor => {
        floor.roomList.forEach(room => {
          if(roomMap.room.id == room.id) {
            buildingId = building.id;
          }
        });
      });
    });

    var floorId = '';
    this.floors.forEach(floor => {
      floor.floor.roomList.forEach(room => {
        if(roomMap.room.id == room.id) {
          floorId = floor.id;
        }
      });
    });

    return "maps/building/"+buildingId+"/floor/"+floorId;
  }

}
