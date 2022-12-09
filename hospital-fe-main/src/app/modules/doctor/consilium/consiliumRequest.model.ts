export class ConsiliumRequest {
    id: string = '';
    reason: string = '';
    dateStart: string = ''
    dateEnd: string = ''
    duration: string = '';
    isDoctors: boolean = true;
    doctors: string[] = [];
    specialities: string[] = [];


    public constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.reason = obj.reason;
            this.dateStart = obj.dateStart;
            this.dateEnd = obj.dateEnd;
            this.duration = obj.duration;
            this.isDoctors = obj.isDoctors;
            this.doctors = obj.doctors;
            this.specialities = obj.specialities;
        }
    }
}