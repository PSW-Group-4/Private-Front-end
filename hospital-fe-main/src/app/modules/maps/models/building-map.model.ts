import { Building } from "./building.model";
import { MapLocation } from "./map-location.model";

export class BuildingMap {
    id: string = '';
    mapLocation: MapLocation = new MapLocation();
    building: Building = new Building;

    public constructor(obj?: any) {
        if (obj) {  
            this.id = obj.id;
            this.building = obj.building;
        }
    }
}
