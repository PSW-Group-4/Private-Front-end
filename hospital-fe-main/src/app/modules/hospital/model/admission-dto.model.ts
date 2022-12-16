import { PatientRoom } from "./patient-room.model";
import { Patient } from "./patient.model";
import { Room } from "./room.model";

export class AdmissionDto {    
    roomId: string = '';
    patientId: string = '';
    reason: string = '';
    arrivalDate: string = '';
    

    public constructor(obj?: any) {
        if (obj) {            
            this.patientId = obj.patient;
            this.reason = obj.reason;
            this.roomId = obj.room;
            this.arrivalDate = obj.arrivalDate;     
            
        }

    }
}