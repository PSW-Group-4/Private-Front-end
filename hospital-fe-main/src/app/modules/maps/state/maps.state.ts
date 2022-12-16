import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { BuildingMap } from "../models/building-map.model";
import { FloorMap } from "../models/floor-map.model";
import { RoomMap } from "../models/room-map.model";

@Injectable({
    providedIn: 'root'
})
export class MapsState {
    private updating$ = new BehaviorSubject<boolean>(false);
    private selectedRoomMap$ = new BehaviorSubject<RoomMap>(new RoomMap()); // initial selected roomMap 


    isUpdating$() {
        return this.updating$.asObservable();
    }

    setUpdating(isUpdating: boolean) {
        this.updating$.next(isUpdating);
    }

    getSelectedRoomMap$() : Observable<RoomMap> {
        return this.selectedRoomMap$.asObservable();
    }

    setSelectedRoomMap(roomMap: RoomMap) {
        this.selectedRoomMap$.next(roomMap);
    }
  
}
