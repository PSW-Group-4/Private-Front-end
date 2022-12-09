import { RoomSchedule } from "./room-schedule.model";

export class Appointment {
    Id: string = "";
    doctorId: string = '';
    patientId: string = '';
    schedule: RoomSchedule = new RoomSchedule()

    public constructor(obj?: any) {
        if (obj) {
            this.Id = obj.Id;
            this.doctorId = obj.doctorId;
            this.patientId = obj.patientId;
            this.schedule = obj.schedule;   
        }
    }
}