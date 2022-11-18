export class BloodRequest {
    Id: string = "";
    doctorId: string = '';
    bloodAmountInMilliliters: number = 0;
    bloodType: number = 0;
    reasonsWhyBloodIsNeeded: string = '';
    dateTime: string = '';

    public constructor(obj?: any) {
        if (obj) {
            this.Id = obj.Id;
            this.doctorId = obj.doctorId;
            this.bloodAmountInMilliliters = obj.amount;
            this.bloodType = obj.bloodType;
            this.reasonsWhyBloodIsNeeded = obj.reason;
            this.dateTime = obj.dateTime;     
        }
    }
}