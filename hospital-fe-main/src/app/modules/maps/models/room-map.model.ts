import { Room } from "../../shared/model/room.model";

export class RoomMap {
    id: string = '';
    coordinateX: number = 0;
    coordinateY: number = 0;  
    height: number = 0;
    width: number = 0;
    room: Room = new Room();
    
    public constructor(obj?: any) {
        if (obj) {  
            this.id = obj.id;
            this.coordinateX = obj.coordinateX;
            this.height = obj.height;
            this.width = obj.width;
            this.room = obj.room;
        }
    }
}
