import { BloodProduct } from "./blood-product.model";

export class BloodSubscribeDTO {
    blood: BloodProduct[] | undefined;
    bloodBank: string = '';
    activeStatus: boolean = false;
    deliveryDay: number = 0.0;
    urgent: boolean = false;

    public constructor(obj?: any) {
        if (obj) {
            console.log(obj) 
            this.blood = obj.blood.map((blood: any) => new BloodProduct(blood));
            this.bloodBank = obj.bloodBank; 
            this.activeStatus = obj.activeStatus;    
            this.deliveryDay = obj.deliveryDay; 
            if(obj.urgent){
                this.urgent = obj.urgent;
            }
        }
    }
}
