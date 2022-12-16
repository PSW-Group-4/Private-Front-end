import { Prescription } from "./prescription.model";
import { Symptom } from "./symptom.module";

export class Report {
    id: string = "";
    medicalAppointmentId: string = "";
    text: string = "";
    symptoms: Array<Symptom> = []
    prescriptions: Array<Prescription> = []
    dateTime: string = ""

    public constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.medicalAppointmentId = obj.medicalAppointmentId;
            this.text = obj.text;
            this.symptoms = obj.symptoms;
            this.prescriptions = obj.prescriptions;
            this.dateTime = obj.dateTime;
        }
    }
}