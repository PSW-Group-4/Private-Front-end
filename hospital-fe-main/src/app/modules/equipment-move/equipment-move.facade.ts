import { Injectable } from "@angular/core";
import { Observable, shareReplay } from "rxjs";
import { Room } from "../shared/model/room.model";
import { RoomService } from "../shared/service/room.service";
import { MoveEquipmentRoomState } from "../shared/state/room-for-move.state";
import { MoveEquipmentTask } from "./model/move-equipment-task.model";
import { MoveEquipmentTaskService } from "./service/move-equipment-task.service";



@Injectable({
    providedIn: 'root'
})
export class EquipmentMoveFacade {
    rooms$ : Observable<Room[]>;
    constructor(private roomService : RoomService, private taskService : MoveEquipmentTaskService, private moveEquipmentState : MoveEquipmentRoomState) {
        this.rooms$ = this.roomService
            .getRooms()
            .pipe(shareReplay(1)); // cache the data
    }

    getRooms$(): Observable<Room[]> {
        return this.rooms$;
    }

    getSelectedRoom$(): Observable<Room> {
        return this.moveEquipmentState.getSelectedRoom$();
    }

    setSelectedRoom(room : Room) {
        return this.moveEquipmentState.setSelectedRoom(room);
    }
    
    createTask$(data : MoveEquipmentTask) {
        return this.taskService.create(data);
    }
      
}
