import { ListKeyManager } from "@angular/cdk/a11y";
import { Injectable } from "@angular/core";
import { observable, Observable, pipe, tap } from "rxjs";
import { BuildingMap } from "./models/building-map.model";
import { FloorMap } from "./models/floor-map.model";
import { Floor } from "./models/floor.model";
import { RoomMap } from "./models/room-map.model";
import { BuildingMapService } from "./services/building-map.service";
import { FloorMapService } from "./services/floor-map.service";
import { RoomMapService } from "./services/room-map.service";
import { MapsState } from "./state/maps.state";



@Injectable({
    providedIn: 'root'
})
export class MapsFacade {
    constructor(private buildingMapService: BuildingMapService, private floorMapService: FloorMapService,
         private roomMapService: RoomMapService, private mapsState: MapsState) { }

  isUpdating$(): Observable<boolean> {
    return this.mapsState.isUpdating$();
  }

  getRoomMaps$(): Observable<RoomMap[]> {
    return this.mapsState.getRoomMaps$();
  }
  
  getFloorMaps$(): Observable<FloorMap[]> {
    return this.mapsState.getFloorMaps$();
  }
  
  getBuildingMaps$(): Observable<BuildingMap[]> {
    return this.mapsState.getBuildingMaps$();
  }

  loadRoomMaps() {
  }

  loadFloorMaps() {
    return this.floorMapService.getFloorMaps()
    .pipe(tap(floorMaps => this.mapsState.setFloorMaps(floorMaps)));
  }

  loadBuildingMaps() {
    return this.buildingMapService.getBuildingMaps()
    .pipe(tap(floorMaps => this.mapsState.setBuildingMaps(floorMaps)));
  }

  getFloorMapsByBuildingMapId$(id: string): Observable<FloorMap[]>{
    return this.floorMapService.getFloorMapsByBuildingMapId(id);
  }
  
  getRoomMapsByFloorMapId$(id: string): Observable<RoomMap[]>{
    return this.roomMapService.getRoomMapsByFloorMapId(id);
  }

  getBuildingMapById$(id : string): BuildingMap | null {
    var returnValue : BuildingMap | null = null;
    this.getBuildingMaps$().forEach(buildingMaps => {
      buildingMaps.forEach(buildingMap => {
        if (buildingMap.id == id) {
          returnValue = buildingMap;
        }
      })
    });
    return returnValue;
  }

  getFloorMapById$(id : string): FloorMap | null {
    var returnValue : FloorMap | null = null;
    this.getFloorMaps$().forEach(floorMaps => {
      floorMaps.forEach(floorMap => {
        if (floorMap.id == id) {
          returnValue = floorMap;
        }
      })
    });
    return returnValue;
  }

  getRoomMapById$(id : string): RoomMap | null {
    var returnValue : RoomMap | null = null;
    this.getRoomMaps$().forEach(roomMaps => {
      roomMaps.forEach(roomMap => {
        if (roomMap.id == id) {
          returnValue = roomMap;
        }
      })
    });
    return returnValue;
  }

  /*getFloorsByBuilding(id:string): FloorMap[] {
    var returnValue:  FloorMap[] = [];
    console.log('2');
    var floors: Observable<Floor[]> | null =  null;
    this.loadBuildingMaps();
    this.getBuildingMaps$().forEach(buildingsMap =>{
      console.log('1');
      console.log(buildingsMap.toString())
      buildingsMap.forEach(buildingMap => {
        console.log(buildingMap);
        console.log('3');
        if(buildingMap.id == id){
          floors = buildingMap.building.floorList;
          returnValue= this.getFloorMapsByFloors(floors);
          
        }
      })
    })
    
    return returnValue;
  }

  getFloorMapsByFloors(floors : Observable<Floor[]>):FloorMap[] {
    var returnValue:  FloorMap[] =[];
    console.log('4');
    var f:  Floor[] =[];;
    this.loadFloorMaps();
    console.log('floors',floors)
   
    console.log('a',f);
    floors.forEach(floor=>{
      
      console.log('5');
      console.log(floor)
      console.log(floor.length)
      for(let i =0; i <1; i++){
        console.log('6');
        this.getFloorMaps$().forEach(floorsMap=> {
          floorsMap.forEach(floorMap=> {
            if(floorMap.id == floor[i].id){
              
              returnValue?.concat(floorMap);
            }
          })
        })
      }      
    })
    return returnValue;
  }*/
  // pessimistic update
  // 1. call API
  // 2. update UI state
  updateRoomMap(roomMap: RoomMap) {
    this.mapsState.setUpdating(true)
    this.roomMapService.updateRoomMap(roomMap)
      .subscribe({
        next: (v) => this.mapsState.updateRooomMaps(roomMap),
        error: (e) => console.log(e),
        complete: () => this.mapsState.setUpdating(false)
    });
  }

  updateFloorMap(floorMap: FloorMap) {
    this.mapsState.setUpdating(true)
    this.floorMapService.updateFloorMap(floorMap)
      .subscribe({
        next: (v) => this.mapsState.updateFloorMaps(floorMap),
        error: (e) => console.log(e),
        complete: () => this.mapsState.setUpdating(false)
    });
  }

  updateBuildingMap(buildingMap: BuildingMap) {
    this.mapsState.setUpdating(true)
    this.buildingMapService.updateBuildingMap(buildingMap)
      .subscribe({
        next: (v) => this.mapsState.updateBuildingMaps(buildingMap),
        error: (e) => console.log(e),
        complete: () => this.mapsState.setUpdating(false)
    });
  }
}
