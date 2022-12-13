export class BloodRequestManager {
    bloodType: string = '';
    amount: number = 0;
    managerId: string = '';
    bloodBankId: string = '';

    public constructor(obj?: any) {
        if (obj) {
            console.log(obj)
            this.bloodType = obj.bloodType;
            this.amount = obj.amount;
            this.managerId = obj.managerId;
            this.bloodBankId = obj.bloodBankId;
        }
    }
}
