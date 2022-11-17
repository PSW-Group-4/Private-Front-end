
export class HashMap {
    roomMapId: string = '';
    floorMapId: string = '';    
    buildingMapId: string = '';

    public constructor(obj?: any) {
        if (obj) {  
            this.roomMapId = obj.roomMapId;
            this.floorMapId = obj.floorMapId;
            this.buildingMapId = obj.buildingMapId;          
        }
    }
}
