export class Equipment {
    
    id: string = '';
    name: string = '';    
    amount: number = 0;

    public constructor(obj?: any) {
        if (obj) {  
            this.id = obj.id;
            this.name = obj.name;
            this.amount = obj.amount;
        }
    }
}
