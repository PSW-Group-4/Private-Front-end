export class Treatment {
    id : string = '';
    medicineId : string = '';
    bloodConsumptionRecordId : string = '';
    dateChanged : string = '';

    public constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.medicineId = obj.medicineId;
            this.bloodConsumptionRecordId = obj.bloodConsumptionRecordId;
            this.dateChanged = obj.dateChanged;
        }

    }
}