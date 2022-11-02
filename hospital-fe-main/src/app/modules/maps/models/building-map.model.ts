import { Observable } from "rxjs";
import { Building } from "./building.model";
import { FloorMap } from "./floor-map.model";

export class BuildingMap {
    building: Building = new Building();
    id: string = '';
    coordinateX: number = 0;
    coordinateY: number = 0;  
    height: number = 0;
    width: number = 0;
    

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
