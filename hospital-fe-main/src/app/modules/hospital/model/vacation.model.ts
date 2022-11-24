import { Doctor } from "./doctor.model";
import { Patient } from "./patient.model";

export class Vacation {
    id: string = '';
    doctorId: string = '';
    dateStart: string = ''
    dateEnd: string = ''
    reason: string = '';
    urgent?: boolean;
    vacationStatus : number = 0;  //0 na cekanju, 1 prihvacen, 2 odbijen 
    deniedRequestReason : string = '';


    public constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.doctorId = obj.doctorId; 
            this.dateStart = obj.dateStart;
            this.dateEnd = obj.dateEnd;
            this.reason = obj.reason;
            this.urgent = obj.urgent;
            this.vacationStatus = obj.vacationStatus;
            this.deniedRequestReason = obj.deniedRequestReason;   
        }
    }
}