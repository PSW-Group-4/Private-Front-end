import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FloorMap } from '../models/floor-map.model';


@Injectable({
  providedIn: 'root'
})
export class FloorMapService {

  readonly API = '/api/FloorMap';

  constructor(private http: HttpClient) {}

  getFloorMaps(): Observable<FloorMap[]> {
    return this.http.get<FloorMap[]>(this.API);
  }

  updateFloorMap(floorMap: FloorMap): Observable<any> {
    return this.http.put(`${this.API}/${floorMap.id}`, floorMap);
  }
}
