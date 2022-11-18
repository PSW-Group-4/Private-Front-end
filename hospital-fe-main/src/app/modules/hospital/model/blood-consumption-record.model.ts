export class BloodConsumptionRecord {
    Id: string = "";
    doctorId: string = '';
    amount: number = 0;
    bloodType: string = '';
    reason: string = '';
    dateTime: string = '';

    public constructor(obj?: any) {
        if (obj) {
            this.Id = obj.Id;
            this.doctorId = obj.doctorId;
            this.amount = obj.amount;
            this.bloodType = obj.bloodType;
            this.reason = obj.reason;
            this.dateTime = obj.dateTime;     
        }
    }
}