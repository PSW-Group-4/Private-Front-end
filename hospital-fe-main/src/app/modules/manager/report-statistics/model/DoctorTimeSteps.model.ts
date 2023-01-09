export class DoctorTimeSteps {
    doctorAge: any;
    timeStepCount: number = 0;
    
    public constructor(obj?: any) {
        if (obj) {
            this.doctorAge = obj.doctorAge;
            this.timeStepCount = obj.timeStepCount;
        }
    }
}