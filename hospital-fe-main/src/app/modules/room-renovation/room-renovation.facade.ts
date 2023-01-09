import { Injectable } from '@angular/core';
import { throwMatDuplicatedDrawerError } from '@angular/material/sidenav';
import { Observable, shareReplay } from 'rxjs';
import { Building } from '../maps/models/building.model';
import { Floor } from '../maps/models/floor.model';
import { Room } from '../shared/model/room.model';
import { RenovationDto } from './models/renovation-dto.model';
import { RenovationSessionWDates } from './models/renovation-session-with-dates';
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

  chooseSpecificTime$(inputData : RenovationSessionWDates): Observable<any> {
    return this.renovationSessionService.chooseSpecificTime(inputData);
  }

  chooseType$(input : RenovationSessionWType): Observable<any> {
    return this.renovationSessionService.chooseType(input);
  }

  createNewRooms$(inputData : RenovationSessionWRooms): Observable<any> {
    return this.renovationSessionService.createNewRooms(inputData);
  }

  createTimeframe$(inputData : RenovationSessionWDates): Observable<any> {
    return this.renovationSessionService.createTimeframe(inputData);
  }

  endSession$(inputData : RenovationSessionWId): Observable<any> {
    return this.renovationSessionService.endSession(inputData);
  }

  returnToNewRoomCreation$(inputData : RenovationSessionWId): Observable<any> {
    return this.renovationSessionService.returnToNewRoomCreation(inputData);
  }

  returnToOldRoomsSelection$(inputData : RenovationSessionWId): Observable<any> {
    return this.renovationSessionService.returnToOldRoomsSelection(inputData);
  }

  returnToSpecificTimeSelection$(inputData : RenovationSessionWId): Observable<any> {
    return this.renovationSessionService.returnToSpecificTimeSelection(inputData);
  }

  returnToTimeframeCreation$(inputData : RenovationSessionWId): Observable<any> {
    return this.renovationSessionService.returnToTimeframeCreation(inputData);
  }

  returnToTypeSelection$(inputData : RenovationSessionWId): Observable<any> {
    return this.renovationSessionService.returnToTypeSelection(inputData);
  }

  startSession$(): Observable<String> {
    return this.renovationSessionService.startSession();
  }

}
