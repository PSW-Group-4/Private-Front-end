import { Injectable } from "@angular/core";
import { Observable, shareReplay } from "rxjs";
import { Room } from "../shared/model/room.model";
import { RoomService } from "../shared/service/room.service";



@Injectable({
    providedIn: 'root'
})
export class EquipmentMoveFacade {
    rooms$ : Observable<Room[]>;
    constructor(private roomService : RoomService) {
        this.rooms$ = this.roomService
            .getRooms()
            .pipe(shareReplay(1)); // cache the data
    }

    getRooms$(): Observable<Room[]> {
        return this.rooms$;
    }
      
}
