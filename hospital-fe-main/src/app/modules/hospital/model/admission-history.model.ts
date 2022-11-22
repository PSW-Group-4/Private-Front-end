import { Admission } from "./admission.model";

export class AdmissionHistory {
    Id: string = "";
    admissionId: string = '';
    dischargeDate: string = '';
    dischargeReason: String = '';

    public constructor(obj?: any) {
        if (obj) {
            this.Id = obj.Id;
            this.admissionId = obj.admissionId;
            this.dischargeDate = obj.dischargeDate;
            this.dischargeReason = obj.dischargeReason;   
        }

    }
}