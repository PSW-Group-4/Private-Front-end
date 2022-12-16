import { BloodBank } from "./blood-bank.model";
import { Price } from "./price.model";
import { Tender } from "./tender.model";
import { TenderForReview } from "./tenders-for-review.model";

export class TenderApplication {
    applicationId : string = ''
    bloodBank: BloodBank = new BloodBank();
    tender: Tender = new Tender();
    price : Price = new Price();
    public constructor(obj?: any) {
        if (obj) {
            this.bloodBank = obj.bloodBank;
            this.tender = obj.tender;   
            this.price = obj.price;
            this.applicationId = obj.applicationId;   
        }
    }
}