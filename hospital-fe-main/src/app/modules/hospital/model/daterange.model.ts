export class DateRange {
    startTime: Date = new Date;
    endTime: Date = new Date;
    duration: String = "";
  
    public constructor(obj?: any) {
      if (obj) {
        this.startTime = obj.startDate;
        this.endTime = obj.endTime;
        this.duration = obj.duration;
      }
    }
  }
  