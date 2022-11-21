import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Room } from "../model/room.model";

@Injectable({
    providedIn: 'root'
})
export class MoveEquipmentRoomState {
    // Used as a buffer for move-equipment to set selected source room to one that was clicked on the maps
    // Using state so we dont send ID through url
    private updating$ = new BehaviorSubject<boolean>(false);
    private selectedRoom$ = new BehaviorSubject<Room>(new Room()); // initial selected roomMap 


    isUpdating$() {
        return this.updating$.asObservable();
    }

    setUpdating(isUpdating: boolean) {
        this.updating$.next(isUpdating);
    }

    getSelectedRoom$() : Observable<Room> {
        return this.selectedRoom$.asObservable();
    }

    setSelectedRoom(room: Room) {
        this.selectedRoom$.next(room);
    }
  
}
