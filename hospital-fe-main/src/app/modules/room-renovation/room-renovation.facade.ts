import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { Building } from '../maps/models/building.model';
import { Floor } from '../maps/models/floor.model';
import { Room } from '../shared/model/room.model';
import { RenovationDto } from './models/renovation-dto.model';
import { Renovation } from './models/renovation.model';
import { BuildingService } from './service/building.service';
import { FloorService } from './service/floor.service';
import { RenovationService } from './service/renovation.service';
import { RoomMapService } from './service/room-map-service';
import { SchedulingService } from './service/scheduling.service';

@Injectable({
  providedIn: 'root'
})
export class RoomRenovationFacade {


  private buildings$: Observable<Building[]>;
  
  constructor(private buildingService: BuildingService, private floorService: FloorService, private roomMapService: RoomMapService, private schedulingService : SchedulingService, private renovationService : RenovationService) { 
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

  checkIfRoomsAreAdjacent$(id1 : String, id2 : String) : Observable<Boolean> {
    return this.roomMapService.checkIfRoomsAreAdjacent(id1, id2);
  }

  getAllRecommendations$(formattedDate: String, duration: number, id1: String, id2: String) : Observable<Date[]>{
    return this.schedulingService.getAllRecommendations(formattedDate, duration, id1, id2);
  }

  createNewRenovationAppointment$(renovation: RenovationDto) {
    return this.renovationService.create(renovation);
  }

}
