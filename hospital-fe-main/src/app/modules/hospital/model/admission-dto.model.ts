import { PatientRoom } from "./patient-room.model";
import { Patient } from "./patient.model";
import { Reason } from "./reason.model";
import { Room } from "./room.model";

export class AdmissionDto {    
    roomId: string = '';
    patientId: string = '';
    reasonText: Reason = new Reason();
    arrivalDate: string = '';
    

    public constructor(obj?: any) {
        if (obj) {            
            this.patientId = obj.patient;
            this.reasonText = obj.reasonText;
            this.roomId = obj.room;
            this.arrivalDate = obj.arrivalDate;     
            
        }

    }
}