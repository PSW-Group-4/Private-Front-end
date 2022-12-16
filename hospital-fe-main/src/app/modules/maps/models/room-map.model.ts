import { Room } from "../../shared/model/room.model";
import { MapLocation } from "./map-location.model";

export class RoomMap {
    id: string = '';
    mapLocation: MapLocation = new MapLocation();
    room: Room = new Room();
    
    public constructor(obj?: any) {
        if (obj) {  
            this.id = obj.id;
            this.room = obj.room;
        }
    }
}
