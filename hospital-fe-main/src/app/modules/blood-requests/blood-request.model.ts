export class BloodRequest {
    id: String ='';
    doctorId: String ='';
    bloodType: string = '';
    reasonsWhyBloodIsNeeded: String ='';
    bloodAmountInMilliliters: number = 0.0;
    isApproved: boolean = false;
    rejectionComment: String ='';
    managerId: String ='';

    public constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.doctorId = obj.doctorId;    
            this.bloodType = obj.bloodType; 
            this.reasonsWhyBloodIsNeeded = obj.reasonsWhyBloodIsNeeded;
            this.bloodAmountInMilliliters = obj.bloodAmountInMilliliters;    
            this.isApproved = obj.isApproved;    
            this.rejectionComment = obj.rejectionComment;
            this.managerId = obj.managerId;      
        }
    }
}
