export class PatientRoom {
    id: number = 0;
    number: string = '';
    floor: number = 0;
    bedIds: string[] = [];

    public constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.number = obj.number;
            this.floor = obj.floor;     
            this.bedIds = obj.bedIds;   
        }
    }
}