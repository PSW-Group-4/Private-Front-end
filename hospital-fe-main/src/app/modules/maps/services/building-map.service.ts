import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BuildingMap } from '../models/building-map.model';



@Injectable({
  providedIn: 'root'
})
export class BuildingMapService {

  readonly API = '/api/BuildingMap';

  constructor(private http: HttpClient) {}

  getBuildingMap(): Observable<BuildingMap[]> {
    return this.http.get<BuildingMap[]>(this.API);
  }

  updateBuildingMap(buildingMap: BuildingMap): Observable<any> {
    return this.http.put(`${this.API}/${buildingMap.id}`, buildingMap);
  }
}
