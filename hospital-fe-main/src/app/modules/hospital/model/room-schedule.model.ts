export class RoomSchedule {
    id: string = "";
    dateTime: string = '';
    isDone: boolean = false;
    roomId: string = '';
    duration: number = 0;
    
    public constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.dateTime = obj.dateTime;
            this.isDone = obj.isDone;
            this.roomId = obj.roomId;
            this.duration = obj.duration;     
        }
    }
}