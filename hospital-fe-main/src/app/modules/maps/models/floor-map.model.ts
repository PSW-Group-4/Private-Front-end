import { Floor } from "./floor.model";
import { MapLocation } from "./map-location.model";

export class FloorMap {
    id: string = '';
    mapLocation: MapLocation = new MapLocation();
    floor: Floor = new Floor();

    public constructor(obj?: any) {
        if (obj) {  
            this.id = obj.id;
            this.floor = obj.floor
        }
    }
}
