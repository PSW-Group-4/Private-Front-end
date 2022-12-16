import { Observable } from "rxjs/internal/Observable";
import { Room } from "../../shared/model/room.model";

export class Floor {
    id: string = '';
    name: string = '';    
    number: number = 0;
    roomList: Room[] = [];

    public constructor(obj?: any) {
        if (obj) {  
        }
    }
}
