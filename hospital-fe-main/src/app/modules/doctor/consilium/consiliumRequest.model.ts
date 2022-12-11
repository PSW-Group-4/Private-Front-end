export class ConsiliumRequest {
    id: string = '';
    reason: string = '';
    dateStart: string = ''
    dateEnd: string = ''
    duration: string = '';
    isDoctor: boolean = true;
    doctorsId: string[] = [];
    specialities: string[] = [];


    public constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.reason = obj.reason;
            this.dateStart = obj.dateStart;
            this.dateEnd = obj.dateEnd;
            this.duration = obj.duration;
            this.isDoctor = obj.isDoctor;
            this.doctorsId = obj.doctorsId;
            this.specialities = obj.specialities;
        }
    }
}