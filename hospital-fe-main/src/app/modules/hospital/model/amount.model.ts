export class Amount {
    value: number = 0;

    public constructor(obj?: any) {
        if (obj) {
            this.value = obj.value; 
        }
    }
}