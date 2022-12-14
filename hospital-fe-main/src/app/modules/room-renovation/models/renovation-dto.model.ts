
import { Room } from "../../shared/model/room.model";

export enum TypeOfRenovation {MergeRooms = 'Merge', SplitRooms = 'Split'}
export class RenovationDto {
    
    Type : TypeOfRenovation = TypeOfRenovation.MergeRooms
    Room1 : Room = new Room()
    Room2 : Room = new Room()
    Room3 : Room = new Room()
    StartTime : Date = new Date();
    EndTime : Date = new Date();

    public constructor(obj?: any) {
        if (obj) {  
        }
    }
}
        