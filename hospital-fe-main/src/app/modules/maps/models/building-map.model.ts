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
            this.id = obj.id;
            this.description = obj.description;
            this.name = obj.name;
            this.number = obj.number;
            /*this.coordinateX = obj.coordinateX;
            this.coordinateY = obj.coordinateY;
            this.height = obj.height;
            this.width = obj.width;*/
        }
    }
}
