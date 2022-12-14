import { Room } from "../../modules/shared/model/room.model";
import { DateRange } from "./date-range.model";

export class Appointment {
    dateRange: DateRange = new DateRange;
    discriminator: String =  '';
    room: Room = new Room;
    isDone:boolean = false;

    public constructor(obj?: any) {
        if (obj) {  
        }
    }
}
