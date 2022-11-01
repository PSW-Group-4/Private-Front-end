import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BuildingMap } from '../models/building-map.model';



@Injectable({
  providedIn: 'root'
})
export class BuildingMapService {

  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  readonly API = 'api/BuildingMap';

  constructor(private http: HttpClient) {}

  getBuildingMaps(): Observable<BuildingMap[]> {
    return this.http.get<BuildingMap[]>(this.apiHost + this.API, {headers: this.headers});
  }

  updateBuildingMap(buildingMap: BuildingMap): Observable<any> {
    return this.http.put(`${this.apiHost}${this.API}/${buildingMap.id}`, buildingMap);
  }
}
