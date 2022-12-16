import { Medicine } from "./medicine-model";

export class Prescription {
    id: string = "";
    reportId: string = "";
    dateTime: string = "";
    medicines: Array<Medicine> = [];

    public constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.reportId = obj.reportId;
            this.dateTime = obj.dateTime;
            this.medicines = obj.medicines;
        }
    }
}