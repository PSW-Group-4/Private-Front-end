import { BloodBank } from "./blood-bank.model";
import { Tender } from "./tender.model";
import { TenderForReview } from "./tenders-for-review.model";

export class TenderApplication {
    applicationId : string = ''
    bloodBank: BloodBank = new BloodBank();
    tender: Tender = new Tender();
    priceInRSD : number = 0;
    public constructor(obj?: any) {
        if (obj) {
            this.bloodBank = obj.bloodBank;
            this.tender = obj.tender;   
            this.priceInRSD = obj.priceInRSD;
            this.applicationId = obj.applicationId;   
        }
    }
}