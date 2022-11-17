import { Patient } from "./patient.model";
import { Room } from "./room.model";

export class Admission {
    Id: string = "";
    patient: Patient = new Patient;
    reason: string = '';
    room: Room = new Room;
    arrivalDate: string = '';

    public constructor(obj?: any) {
        if (obj) {
            this.Id = obj.Id;
            this.patient = obj.patient;
            this.reason = obj.reason;
            this.room = obj.room;
            this.arrivalDate = obj.arrivalDate;     
        }

    }
}