import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BuildingMap } from '../models/building-map.model';
import { Router } from '@angular/router';
import * as d3 from 'd3';
import { MapsFacade } from '../maps.facade';
import { Building } from '../models/building.model';

@Injectable({
  providedIn: 'root'
})
export class BuildingMapService {

  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  readonly API = 'api/BuildingMap';

  constructor(private http: HttpClient, private router: Router) {}

  getBuildingMaps(): Observable<BuildingMap[]> {
    return this.http.get<BuildingMap[]>(this.apiHost + this.API, {headers: this.headers});
  }

  getBuildingMapById(id: string): Observable<BuildingMap> {
    return this.http.get<BuildingMap>(this.apiHost + this.API+"/"+id, {headers: this.headers});
  }

  updateBuildingMap(buildingMap: BuildingMap): Observable<any> {
    return this.http.put(`${this.apiHost}${this.API}/${buildingMap.id}`, buildingMap);
  }

  updateBuilding(building: Building): Observable<any>{
    return this.http.put(`${this.apiHost}${this.API}/${building.id}`, building);
  }
  
 
}
