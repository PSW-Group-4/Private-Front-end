import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { BuildingMap } from "../models/building-map.model";
import { FloorMap } from "../models/floor-map.model";
import { RoomMap } from "../models/room-map.model";

@Injectable({
    providedIn: 'root'
})
export class MapsState {
    private updating$ = new BehaviorSubject<boolean>(false);

    private roomMaps$ = new BehaviorSubject<RoomMap[]>([]);
    private floorMaps$ = new BehaviorSubject<FloorMap[]>([]);
    private buildingMaps$ = new BehaviorSubject<BuildingMap[]>([]);


    isUpdating$() {
        return this.updating$.asObservable();
    }

    setUpdating(isUpdating: boolean) {
        this.updating$.next(isUpdating);
    }

    getRoomMaps$() {
        return this.roomMaps$.asObservable();
    }

    setRoomMaps(roomMaps: RoomMap[]) {
        this.roomMaps$.next(roomMaps);
    }

    updateRooomMaps(updatedRoomMap: RoomMap) {
        const roomMaps = this.roomMaps$.getValue();
        const indexOfUpdated = roomMaps.findIndex(entity => entity.id === updatedRoomMap.id);
        roomMaps[indexOfUpdated] = updatedRoomMap;
        this.roomMaps$.next([...roomMaps]);
    }

    getFloorMaps$() {
        return this.floorMaps$.asObservable();
    }

    setFloorMaps(floorMaps: FloorMap[]) {
        this.floorMaps$.next(floorMaps);
    }

    updateFloorMaps(updatedFloorMap: FloorMap) {
        const floorMaps = this.floorMaps$.getValue();
        const indexOfUpdated = floorMaps.findIndex(entity => entity.id === updatedFloorMap.id);
        floorMaps[indexOfUpdated] = updatedFloorMap;
        this.floorMaps$.next([...floorMaps]);
    }

    getBuildingMaps$() {
        return this.buildingMaps$.asObservable();
    }

    setBuildingMaps(buildingMaps: BuildingMap[]) {
        this.buildingMaps$.next(buildingMaps);
    }

    updateBuildingMaps(updatedBuildingMap: RoomMap) {
        const buildingMaps = this.buildingMaps$.getValue();
        const indexOfUpdated = buildingMaps.findIndex(entity => entity.id === updatedBuildingMap.id);
        buildingMaps[indexOfUpdated] = updatedBuildingMap;
        this.buildingMaps$.next([...buildingMaps]);
    }
  
}
