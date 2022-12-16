export class Medicine {
    id : string = '';
    name : string = '';

    public constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.name = obj.name; 
        }
    }
}