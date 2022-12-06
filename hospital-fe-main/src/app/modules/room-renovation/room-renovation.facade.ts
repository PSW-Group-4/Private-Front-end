import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { Building } from '../maps/models/building.model';
import { Floor } from '../maps/models/floor.model';
import { Room } from '../shared/model/room.model';
import { BuildingService } from './service/building.service';
import { FloorService } from './service/floor.service';

@Injectable({
  providedIn: 'root'
})
export class RoomRenovationFacade {

  private buildings$: Observable<Building[]>;
  
  constructor(private buildingService: BuildingService, private floorService: FloorService) { 
          this.buildings$ = this.buildingService
            .getBuildings()
            .pipe(shareReplay(1)); // cache the data    
         }

  getBuildings$(): Observable<Building[]> {
    return this.buildings$;
  }

  getFloorsByBuildingId$(id : String) : Observable<Floor[]> {
    return this.buildingService.getFloorsByBuildingId(id);
  }

  getRoomsByFloorId$(id : String) : Observable<Room[]> {
    return this.floorService.getRoomsByFloorId(id);
  }

}
