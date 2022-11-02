import { Observable } from "rxjs";
import { Floor } from "./floor.model";

export class Building {
    
    id: string = '';
    name: string = '';    
    floorList: Observable<Floor[]> = new Observable<Floor[]>();
    public constructor(obj?: any) {
        if (obj) {  
        }
    }
}
