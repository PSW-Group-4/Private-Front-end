import { EquipmentList } from "./equipment-list.model";
import { Equipment } from "./equipment.model";

export class Room {
    
    id: string = '';
    description: string = '';
    name: string = '';    
    number: number = 0;
    roomsEquipment:EquipmentList[] = [];
    public constructor(obj?: any) {
        if (obj) {  
            this.id = obj.id;
            this.description = obj.description;
            this.name = obj.name;
            this.roomsEquipment = obj.equipmentList;
        }
    }
}
