import {Blood} from "../hospital/model/blood.model";

export class BloodRequest {
    id: String ='';
    doctorId = '';
    blood: Blood = new Blood();
    reasons: String ='';
    isApproved: boolean = false;
    rejectionComment: String ='';
    managerId: String ='';
    sendOnDate: Date = new Date();
    isUrgent: boolean = false;

    public constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.doctorId = obj.doctorId;
            this.blood = obj.blood;
            this.reasons = obj.reasons;
            this.isApproved = obj.isApproved;
            this.rejectionComment = obj.rejectionComment;
            this.managerId = obj.managerId;
            this.isUrgent = obj.isUrgent;
            this.sendOnDate = obj.sendOnDate;
        }
    }
}
