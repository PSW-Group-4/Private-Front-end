export class Price {
    amount : number = 0;
    currency : string = 'RSD';
    public constructor(obj?: any) {
        if (obj) {
           this.amount = obj.amount;
           this.currency = obj.currency;   
        }
    }
}