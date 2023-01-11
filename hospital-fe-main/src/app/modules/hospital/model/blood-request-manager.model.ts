export class BloodRequestManager {
    bloodType: string = '';
    amount: number = 0;
    managerId: string = '';
    bloodBankId: string = '';
    date: Date = new Date();
    id: string = '';

    public constructor(obj?: any) {
        if (obj) {
            console.log(obj)
            this.bloodType = obj.bloodType;
            this.amount = obj.amount;
            this.managerId = obj.managerId;
            this.bloodBankId = obj.bloodBankId;
            this.date = new Date(2022, (obj.amount % 12) + 1, (obj.amount % 28) + 1);
        }
    }
}
