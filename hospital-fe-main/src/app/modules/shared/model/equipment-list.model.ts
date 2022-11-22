import { Equipment } from "./equipment.model";

export class EquipmentList {
    
    public equipment: Equipment = new Equipment;
    public amount: number = 0;

    public constructor(obj?: any) {
        if (obj) {  
        }
    }
}
