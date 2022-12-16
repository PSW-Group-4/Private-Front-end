import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FloorMap } from '../models/floor-map.model';
import { Floor } from '../models/floor.model';


@Injectable({
  providedIn: 'root'
})
export class FloorMapService {

  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  readonly API = 'api/FloorMap';

  constructor(private http: HttpClient) {}

  getFloorMaps(): Observable<FloorMap[]> {
    return this.http.get<FloorMap[]>(this.apiHost + this.API, {headers: this.headers});
  }

  getFloorMapsByBuildingMapId(id: string): Observable<FloorMap[]> {
    return this.http.get<FloorMap[]>(this.apiHost + this.API+"/ByBuilding/"+id, {headers: this.headers});
  }

  updateFloor(floor: Floor): Observable<any>{
    return this.http.put(`${this.apiHost}${this.API}/${floor.id}`, floor);
  }

  updateFloorMap(floorMap: FloorMap): Observable<any> {
    return this.http.put(`${this.apiHost}${this.API}/${floorMap.id}`, floorMap);
  }
}
