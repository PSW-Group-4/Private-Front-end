export class TreatmentRequestDto {    
    medicineId : string = '';
    bloodConsumptionRecordId : any;
    dateChanged : any;

    public constructor(obj?: any) {
        if (obj) {            
            this.medicineId = obj.medicineId;
            this.bloodConsumptionRecordId = obj.bloodConsumptionRecordId;
            this.dateChanged = obj.dateChanged;
        }

    }
}