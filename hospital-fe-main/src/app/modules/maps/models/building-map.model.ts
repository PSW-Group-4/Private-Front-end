import { Observable } from "rxjs";
import { Building } from "./building.model";
import { FloorMap } from "./floor-map.model";

export class BuildingMap {
    id: string = '';
    description: string = '';
    name: string = '';    
    number: number = 0;
    building: Building = new Building();
    public constructor(obj?: any) {
        if (obj) {  
        }
    }
}
