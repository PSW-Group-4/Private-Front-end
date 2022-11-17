import { Doctor } from "./doctor.model";
import { Patient } from "./patient.model";

export class Appointment {
    Id: string = "";
    doctorId: string = '';
    patientId: string = '';
    roomId: string = '';
    dateTime: string = '';

    public constructor(obj?: any) {
        if (obj) {
            this.Id = obj.Id;
            this.doctorId = obj.doctorId;
            this.patientId = obj.patientId;
            this.roomId = obj.roomId;
            this.dateTime = obj.dateTime;     
        }
    }
}