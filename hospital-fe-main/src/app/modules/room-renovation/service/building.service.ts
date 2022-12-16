import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Building } from '../../maps/models/building.model';
import { Floor } from '../../maps/models/floor.model';


// TODO GetAll and GetAllFloorsBasedOnId
@Injectable({
  providedIn: 'root'
})
export class BuildingService {
  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  readonly API = 'api/Building';

  constructor(private http: HttpClient) {}

  getBuildings(): Observable<Building[]> {
    return this.http.get<Building[]>(this.apiHost + this.API, {headers: this.headers});
  }

  getFloorsByBuildingId(id : String) {
    return this.http.get<Floor[]>(this.apiHost + this.API + '/GetFloorsByBuildingId/' + id, {headers: this.headers});
  }
}
