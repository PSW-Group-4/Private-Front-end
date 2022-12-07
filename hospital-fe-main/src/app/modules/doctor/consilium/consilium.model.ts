import { Doctor } from "../../hospital/model/doctor.model";
import { Room } from "../../hospital/model/room.model";

export class Consilium {
    id: string = '';
    reason: string = '';
    date: string = ''
    duration: string = '';
    room: Room = new Room;
    doctors: Doctor[] = [];


    public constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.reason = obj.reason;
            this.date = obj.date;
            this.duration = obj.duration;
            this.room = obj.room;
            this.doctors = obj.doctors;
        }
    }
}