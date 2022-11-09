import { Injectable } from "@angular/core";
import { Observable, shareReplay } from "rxjs";
import { BuildingMap } from "./models/building-map.model";
import { FloorMap } from "./models/floor-map.model";
import { RoomMap } from "./models/room-map.model";
import { BuildingMapService } from "./services/building-map.service";
import { FloorMapService } from "./services/floor-map.service";
import { RoomMapService } from "./services/room-map.service";



@Injectable({
    providedIn: 'root'
})
export class MapsFacade {
  
  private roomMaps$: Observable<RoomMap[]>;
  private floorMaps$: Observable<FloorMap[]>;
  private buildingMaps$: Observable<BuildingMap[]>;
  
  constructor(private buildingMapService: BuildingMapService, private floorMapService: FloorMapService,
         private roomMapService: RoomMapService) { 
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

}
