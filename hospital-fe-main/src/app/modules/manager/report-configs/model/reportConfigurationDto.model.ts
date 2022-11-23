import { requestFrequency } from "./requestFrequency.enum";

export class ReportConfigurationDto {
    id:string = "";
    bloodBankid: string = "";
    bloodBankName: string = '';
    requestFrequency: requestFrequency = requestFrequency.DAILY;
    activeStatus: string = "false";

    public constructor(obj?: any) {
        if (obj) {
          this.id = obj.id;
          this.bloodBankid = obj.bloodBankid;
          this.bloodBankName = obj.bloodBankName;
          this.requestFrequency = obj.requestFrequency;
          this.activeStatus = obj.activeStatus;
        }
    }
}
