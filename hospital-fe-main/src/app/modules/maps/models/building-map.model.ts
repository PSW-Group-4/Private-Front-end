import { Observable } from "rxjs";
import { Building } from "./building.model";
import { FloorMap } from "./floor-map.model";

export class BuildingMap {
    
    
    coordinateX: number = 0;
    coordinateY: number = 0;  
    height: number = 0;
    id: string = '';
    width: number = 0;
    building: Building = new Building;

    public constructor(obj?: any) {
        if (obj) {  
            this.id = obj.id;
            this.coordinateX = obj.coordinateX;
            this.height = obj.height;
            this.width = obj.width;
            this.building = obj.building;
        }
    }
}
