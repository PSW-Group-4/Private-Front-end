import { DateRange } from "./daterange.model";
import { RoomSchedule } from "./room-schedule.model";

export class Appointment {
    Id: string = "";
    doctorId: string = '';
    patientId: string = '';
    roomId: string = "";
    startTime: String = "";

    public constructor(obj?: any) {
        if (obj) {
            this.Id = obj.Id;
            this.doctorId = obj.doctorId;
            this.patientId = obj.patientId;
            this.roomId = obj.roomId;  
            this.startTime = obj.startTime; 
        }
    }
}