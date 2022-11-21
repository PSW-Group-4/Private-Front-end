export class Equipment {
    
    id: string = '';
    name: string = '';    

    public constructor(obj?: any) {
        if (obj) {  
            this.id = obj.id;
            this.name = obj.name;
        }
    }
}
