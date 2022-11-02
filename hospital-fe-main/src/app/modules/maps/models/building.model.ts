import { Observable } from "rxjs";
import { Floor } from "./floor.model";

export class Building {
    id: string = '';
    name: string = '';    
    number: number = 0;
    floorList: Floor[] = [];

    public constructor(obj?: any) {
        if (obj) {  
        }
    }
}
