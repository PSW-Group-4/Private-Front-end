export class BuildingMap {
    id: string = '';
    description: string = '';
    name: string = '';    
    number: number = 0;
    coordinateX: number = 0;
    coordinateY: number = 0;
    height:number = 0;
    width:number = 0;
    
    public constructor(obj?: any) {
        if (obj) {  
            this.id = obj.id;
            this.description = obj.description;
            this.name = obj.name;
            this.number = obj.number;
            /*this.coordinateX = obj.coordinateX;
            this.coordinateY = obj.coordinateY;
            this.height = obj.height;
            this.width = obj.width;*/
        }
    }
}
