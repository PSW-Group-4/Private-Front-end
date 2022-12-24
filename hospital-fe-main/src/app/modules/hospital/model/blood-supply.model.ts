export class BloodSupply {
    Id: string = "";
    amount: number = 0;
    bloodType: string = '';

    public constructor(obj?: any) {
        if (obj) {
            this.Id = obj.Id;
            this.amount = obj.amount;
            this.bloodType = obj.bloodType;
        }
    }
}