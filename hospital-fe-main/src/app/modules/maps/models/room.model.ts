import { Equipment } from "./equipment.model";

export class Room {
    
    id: string = '';
    description: string = '';
    name: string = '';    
    number: number = 0;
    equipmentList:Equipment[] = [];
    public constructor(obj?: any) {
        if (obj) {  
            this.id = obj.id;
            this.description = obj.description;
            this.name = obj.name;
            this.equipmentList = obj.equipmentList;
        }
    }
}
