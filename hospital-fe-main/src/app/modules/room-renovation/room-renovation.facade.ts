import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { Building } from '../maps/models/building.model';
import { Floor } from '../maps/models/floor.model';
import { Room } from '../shared/model/room.model';
import { RenovationDto } from './models/renovation-dto.model';
import { RenovationSessionWId } from './models/renovation-session-with-id';
import { RenovationSessionWRooms } from './models/renovation-session-with-rooms';
import { RenovationSessionWType } from './models/renovation-session-with-type';
import { Renovation } from './models/renovation.model';
import { BuildingService } from './service/building.service';
import { FloorService } from './service/floor.service';
import { RenovationSessionService } from './service/renovation-sourcing.service';
import { RoomMapService } from './service/room-map-service';
import { SchedulingService } from './service/scheduling.service';

@Injectable({
  providedIn: 'root'
})
export class RoomRenovationFacade {


  private buildings$: Observable<Building[]>;
  
  constructor(private buildingService: BuildingService, private floorService: FloorService, private roomMapService: RoomMapService, private schedulingService : SchedulingService, private renovationSessionService : RenovationSessionService) { 
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

  chooseOldRooms$(inputData : RenovationSessionWRooms): Observable<any> {
    return this.renovationSessionService.chooseOldRooms(inputData);
  }

  chooseSpecificTime$(inputData : RenovationDto): Observable<any> {
    return new Observable<String>;
  }

  chooseType$(input : RenovationSessionWType): Observable<any> {
    return this.renovationSessionService.chooseType(input);
  }

  createNewRooms$(inputData : RenovationDto): Observable<any> {
    return new Observable<String>;
  }

  createTimeframe$(inputData : RenovationDto): Observable<any> {
    return new Observable<String>;
  }

  endSession$(inputData : RenovationDto): Observable<any> {
    return new Observable<String>;
  }

  returnToNewRoomCreation$(inputData : RenovationDto): Observable<any> {
    return new Observable<String>;
  }

  returnToOldRoomsSelection$(inputData : RenovationDto): Observable<any> {
    return new Observable<String>;
  }

  returnToSpecificTimeSelection$(inputData : RenovationDto): Observable<any> {
    return new Observable<String>;
  }

  returnToTimeframeCreation$(inputData : RenovationDto): Observable<any> {
    return new Observable<String>;
  }

  returnToTypeSelection$(inputData : RenovationSessionWId): Observable<any> {
    return this.renovationSessionService.returnToTypeSelection(inputData);
  }

  startSession$(): Observable<String> {
    return this.renovationSessionService.startSession();
  }

}
