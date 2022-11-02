import { Observable } from "rxjs";
import { Floor } from "./floor.model";

export class Building {
    floorList: Observable<Floor[]> = new Observable<Floor[]>();
    id: string = '';
    name: string = '';    
    
    public constructor(obj?: any) {
        if (obj) {  
        }
    }
}
