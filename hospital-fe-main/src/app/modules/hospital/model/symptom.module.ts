export class Symptom {
    id: string = "";
    name: string = "";

    public constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.name = obj.name;
        }
    }
}