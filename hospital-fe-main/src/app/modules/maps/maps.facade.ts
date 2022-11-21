import { Injectable } from "@angular/core";
import { map, Observable, shareReplay } from "rxjs";
import { Room } from "../shared/model/room.model";
import { MoveEquipmentRoomState } from "../shared/state/room-for-move.state";
import { BuildingMap } from "./models/building-map.model";
import { FloorMap } from "./models/floor-map.model";
import { HashMap } from "./models/maps-hashmap.model";
import { RoomMap } from "./models/room-map.model";
import { BuildingMapService } from "./services/building-map.service";
import { FloorMapService } from "./services/floor-map.service";
import { RoomMapService } from "./services/room-map.service";
import { MapsState } from "./state/maps.state";



@Injectable({
    providedIn: 'root'
})
export class MapsFacade {
  
  private roomMaps$: Observable<RoomMap[]>;
  private floorMaps$: Observable<FloorMap[]>;
  private buildingMaps$: Observable<BuildingMap[]>;
  private hashm: HashMap[] = [];
  
  constructor(private buildingMapService: BuildingMapService, private floorMapService: FloorMapService,
         private roomMapService: RoomMapService, private mapsState: MapsState, private moveEquipmentState : MoveEquipmentRoomState ) { 
          this.roomMaps$ = this.roomMapService
            .getRoomMaps()
            .pipe(shareReplay(1)); // cache the data
          this.floorMaps$ = this.floorMapService
            .getFloorMaps()
            .pipe(shareReplay(1)); // cache the data
          this.buildingMaps$ = this.buildingMapService
            .getBuildingMaps()
            .pipe(shareReplay(1)); // cache the data    
         }

  getRoomMaps$(): Observable<RoomMap[]> {
    return this.roomMaps$;
  }


  setSelectedRoom(room : Room) {
      return this.moveEquipmentState.setSelectedRoom(room);
  } 
  
  getFloorMaps$(): Observable<FloorMap[]> {
    return this.floorMaps$;
  }
  
  getRoomMapById$(id: string): Observable<RoomMap> {
    return this.roomMapService.getRoomMapById(id);
  }

  getBuildingMaps$(): Observable<BuildingMap[]> {
    return this.buildingMaps$;
  }

  getFloorMapsByBuildingMapId$(id: string): Observable<FloorMap[]>{
    return this.floorMapService.getFloorMapsByBuildingMapId(id);
  }
  
  getRoomMapsByFloorMapId$(id: string): Observable<RoomMap[]>{
    return this.roomMapService.getRoomMapsByFloorMapId(id);
  }

  setSelectedRoomMap(roomMap : RoomMap) {
    return this.mapsState.setSelectedRoomMap(roomMap);
  }

  getSelectedRoomMap$() : Observable<RoomMap> {
    return this.mapsState.getSelectedRoomMap$();
  }

  getDataByRoomMapId(roomId: string) : string[]{
    if(this.hashm.length == 0) {
      this.createMap();
    }
    
    var rv :string[] = [];
    for (let element of this.hashm) {
      if(element.roomMapId == roomId) {
        rv.push(element.roomMapId);
        rv.push(element.floorMapId);
        rv.push(element.buildingMapId);
        break;
      }
    }
    return rv;
  }

  createMap() {
    var buildingId = '';
    var roomId = '';
    var floorId = '';

    this.roomMaps$.forEach(roomMaps => {
      roomMaps.forEach(roomMap => {
        roomId = roomMap.id;
        this.buildingMaps$.forEach(buildings => {
          buildings.forEach(building => {
            building.building.floorList.forEach(floor => {
              floor.roomList.forEach(room => {
                if(roomMap.room.id == room.id) {
                  buildingId = building.id;
                }
              });
            });
          });
        });
        this.floorMaps$.forEach(floors => {
          floors.forEach(floor => {
            floor.floor.roomList.forEach(room => {
              if(roomMap.room.id == room.id) {
                floorId = floor.id;
              }
            });
          })
         })
         var temp = new HashMap();
          temp.roomMapId = roomId;
          temp.floorMapId = floorId;
          temp.buildingMapId = buildingId;
          this.hashm.push(temp);
      });
    });
  
  }
}
