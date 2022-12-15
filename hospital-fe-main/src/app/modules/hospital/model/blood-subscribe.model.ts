import { BloodProduct } from "./blood-product.model";

export class BloodSubscribe {
    blood: BloodProduct[] | undefined;
    amount: number = 0;
    bloodBankName: string = '';
    id: String ='';
    activeStatus: boolean = false;
    deliveryDay: number = 0.0;
    sent: boolean = false;
    createdDate: number = 0;
    modifiedDate: number = 0;
    version: number = 0.0;
    allAmounts: string = '';
    types: string = '';
    urgent: boolean = false;

    public constructor(obj?: any) {
        if (obj) {
            console.log(obj)
            this.id = obj.id;   
            this.blood = obj.blood.map((blood: any) => new BloodProduct(blood));
            this.bloodBankName = obj.bloodBankName; 
            this.activeStatus = obj.activeStatus;    
            this.deliveryDay = obj.deliveryDay; 
            this.sent = obj.sent;
            this.createdDate = obj.createdDate;
            this.modifiedDate = obj.modifiedDate;
            this.version = obj.version;
            this.allAmounts = obj.blood.map((one: any) => one.amount)
            this.types = obj.blood.map((one: any) => `${one.bloodType.bloodGroup} ${one.bloodType.rhFactor}`)
            if(obj.urgent){
                this.urgent = obj.urgent;
            }
        }
    }
}
