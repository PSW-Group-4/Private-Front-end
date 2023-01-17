export class Reason {
    text: string = '';

    public constructor(obj?: any) {
        if (obj) {
            this.text = obj.value; 
        }
    }
}