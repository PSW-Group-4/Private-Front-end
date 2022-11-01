import { Doctor } from "./doctor.model";
import { Patient } from "./patient.model";

export class Appointment {
    doctorid: string = '';
    patientid: string = '';
    roomid: string = '';
    dateTime: string = '';

    public constructor(obj?: any) {
        if (obj) {
            this.doctorid = obj.doctorId;
            this.patientid = obj.patientId;
            this.roomid = obj.roomId;
            this.dateTime = obj.dateTime;     
        }

    }
}