import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { BuildingMap } from "./models/building-map.model";
import { FloorMap } from "./models/floor-map.model";
import { RoomMap } from "./models/room-map.model";
import { BuildingMapService } from "./services/building-map.service";
import { FloorMapService } from "./services/floor-map.service";
import { RoomMapService } from "./services/room-map.service";
import { MapsState } from "./state/maps.state";

@Injectable()
export class MapsFacade {
    constructor(private buildingMapService: BuildingMapService, private floorMapService: FloorMapService,
         private roomMapService: RoomMapService, private mapsState: MapsState) { }

  isUpdating$(): Observable<boolean> {
    return this.mapsState.isUpdating$();
  }

  getRoomMaps$(): Observable<RoomMap[]> {
    return this.mapsState.getRoomMaps$();
  }

  loadRoomMaps() {
    return this.roomMapService.getRoomMaps()
      .pipe(tap(entities => this.mapsState.setRoomMaps(entities)));
  }

  loadFloorMaps() {
    return this.floorMapService.getFloorMaps()
      .pipe(tap(entities => this.mapsState.setFloorMaps(entities)));
  }

  loadBuildingMaps() {
    return this.buildingMapService.getBuildingMaps()
      .pipe(tap(entities => this.mapsState.setBuildingMaps(entities)));
  }

  // pessimistic update
  // 1. call API
  // 2. update UI state
  updateRoomMap(roomMap: RoomMap) {
    this.mapsState.setUpdating(true);
    this.roomMapService.updateRoomMap(roomMap)
      .subscribe({
        next: (v) => this.mapsState.updateRooomMaps(roomMap),
        error: (e) => console.log(e),
        complete: () => this.mapsState.setUpdating(false)
    });
  }

  updateFloorMap(floorMap: FloorMap) {
    this.mapsState.setUpdating(true);
    this.floorMapService.updateFloorMap(floorMap)
      .subscribe({
        next: (v) => this.mapsState.updateFloorMaps(floorMap),
        error: (e) => console.log(e),
        complete: () => this.mapsState.setUpdating(false)
    });
  }

  updateBuildingMap(buildingMap: BuildingMap) {
    this.mapsState.setUpdating(true);
    this.buildingMapService.updateBuildingMap(buildingMap)
      .subscribe({
        next: (v) => this.mapsState.updateBuildingMaps(buildingMap),
        error: (e) => console.log(e),
        complete: () => this.mapsState.setUpdating(false)
    });
  }
}
