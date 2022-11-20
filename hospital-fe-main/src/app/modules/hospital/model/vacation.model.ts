import { Doctor } from "./doctor.model";
import { Patient } from "./patient.model";

export class Vacation {
    Id: string = "";
    doctorId: string = '';
    // patientId: string = '';
    // roomId: string = '';
    //dateTime: string = '';
    dateStart: Date | undefined;
    dateEnd: Date | undefined;
    reason: string = '';
    urgency: boolean = false;
    DeniedRequestReason : string = '';
    vacationStatus : number = 1; //svaki kad se napravi bice na cekanju prvobitno?


    public constructor(obj?: any) {
        if (obj) {
            this.Id = obj.Id;
            this.doctorId = obj.doctorId;
            // this.patientId = obj.patientId;
            // this.roomId = obj.roomId;
            //this.dateTime = obj.dateTime;  
            this.dateStart = obj.dateStart;
            this.dateEnd = obj.dateFinish;
            this.reason = obj.reason;
            this.urgency = obj.urgency;
            this.vacationStatus = obj.status;
            this.DeniedRequestReason = obj.deniedComment;   
        }
    }
}