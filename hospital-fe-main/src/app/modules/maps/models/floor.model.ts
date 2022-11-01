import { Observable } from "rxjs/internal/Observable";

export class Floor {
    id: string = '';
    description: string = '';
    name: string = '';    
    number: number = 0;
    floorList: Observable<Floor[]> = new Observable<Floor[]>();

    public constructor(obj?: any) {
        if (obj) {  
        }
    }
}
