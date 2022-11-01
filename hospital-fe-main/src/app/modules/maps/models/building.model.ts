import { Observable } from "rxjs";
import { Floor } from "./floor.model";

export class Building {
    id: string = '';
    floorList: Observable<Floor[]> = new Observable<Floor[]>();
    name: string = '';    
    number: number = 0;

    public constructor(obj?: any) {
        if (obj) {  
        }
    }
}
