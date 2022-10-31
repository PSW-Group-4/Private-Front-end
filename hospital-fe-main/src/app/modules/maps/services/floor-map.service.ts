import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FloorMap } from '../models/floor-map.model';


@Injectable({
  providedIn: 'root'
})
export class FloorMapService {

  apiHost: string = 'http://localhost:5000/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  readonly API = 'api/FloorMap';

  constructor(private http: HttpClient) {}

  getFloorMaps(): Observable<FloorMap[]> {
    return this.http.get<FloorMap[]>(this.apiHost + this.API, {headers: this.headers});
  }

  updateFloorMap(floorMap: FloorMap): Observable<any> {
    return this.http.put(`${this.apiHost}${this.API}/${floorMap.id}`, floorMap);
  }
}
