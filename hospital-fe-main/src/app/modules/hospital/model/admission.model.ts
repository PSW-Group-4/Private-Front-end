import { PatientRoom } from "./patient-room.model";
import { Patient } from "./patient.model";
import { Room } from "./room.model";
import { Treatment } from "./treatment-model";

export class Admission {
    Id: string = "";
    patient: Patient = new Patient();
    reason: string = '';
    room: PatientRoom = new PatientRoom();
    arrivalDate: string = '';
    treatments: Treatment = new Treatment();

    public constructor(obj?: any) {
        if (obj) {
            this.Id = obj.Id;
            this.patient = obj.patient;
            this.reason = obj.reason;
            this.room = obj.room;
            this.arrivalDate = obj.arrivalDate;    
            this.treatments = obj.treatments; 
        }

    }
}