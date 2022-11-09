import { Equipment } from "./equipment.model";

export class Room {
    
    id: string = '';
    description: string = '';
    name: string = '';    
    number: number = 0;
    equipmentList:Equipment[] = [];
    public constructor(obj?: any) {
        if (obj) {  
        }
    }
}
