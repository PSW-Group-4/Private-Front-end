import { Floor } from "./floor.model";

export class FloorMap {
    id: string = '';
    coordinateX: number = 0;
    coordinateY: number = 0;  
    height: number = 0;
    width: number = 0;
    floor: Floor = new Floor();

    public constructor(obj?: any) {
        if (obj) {  
            this.id = obj.id;
            this.coordinateX = obj.coordinateX;
            this.height = obj.height;
            this.width = obj.width;
            this.floor = obj.floor
        }
    }
}
