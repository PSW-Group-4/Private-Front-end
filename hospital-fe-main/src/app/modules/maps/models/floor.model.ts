import { Observable } from "rxjs/internal/Observable";
import { Room } from "./room.model";

export class Floor {
    id: string = '';
    description: string = '';
    name: string = '';    
    number: number = 0;
    roomList: Room[] = [];

    public constructor(obj?: any) {
        if (obj) {  
        }
    }
}
