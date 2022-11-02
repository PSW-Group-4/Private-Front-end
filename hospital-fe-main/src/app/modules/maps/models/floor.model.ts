import { Observable } from "rxjs/internal/Observable";
import { Room } from "./room.model";

export class Floor {
    roomList: Observable<Room[]> = new Observable<Room[]>();
    id: string = '';
    name: string = '';    
    number: number = 0;
    
    public constructor(obj?: any) {
        if (obj) {  
        }
    }
}
