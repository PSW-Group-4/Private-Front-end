import { Room } from "../../hospital/model/room.model";

export class RoomMap {
    id: string = '';
    description: string = '';
    name: string = '';    
    number: number = 0;
    room: Room = new Room();
    
    public constructor(obj?: any) {
        if (obj) {  
        }
    }
}
