import { NONE_TYPE } from "@angular/compiler";
import { Room } from "../../shared/model/room.model";

export enum TypeOfRenovation {MergeRooms = 'Merge', SplitRooms = 'Split'}
export class Renovation {
    
    Type : TypeOfRenovation = TypeOfRenovation.MergeRooms
    // When it comes to splitting first room is the source, 2nd and 3rd are destination
    // In merging first two are source, 3rd is destination
    floodId : String = ''
    buildingId: String = ''
    Room1 : Room = new Room()
    Room2 : Room = new Room()
    Room3 : Room = new Room()
    // TODO
    // Pack them into dateRange, or make DTO that packs them into model 
    StartTime : Date = new Date();
    Duration : number = 0;

    public constructor(obj?: any) {
        if (obj) {  
        }
    }
}
