import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Floor } from '../../maps/models/floor.model';
import { Room } from '../../shared/model/room.model';


// TODO GetAll and GetAllRoomsBasedOnId
@Injectable({
  providedIn: 'root'
})
export class FloorService {
  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  readonly API = 'api/Floor';

  constructor(private http: HttpClient) {}

  getFloors(): Observable<Floor[]> {
    return this.http.get<Floor[]>(this.apiHost + this.API, {headers: this.headers});
  }

  getRoomsByFloorId(id : String) {
    return this.http.get<Room[]>(this.apiHost + this.API + '/GetRoomsByFloorId/' + id, {headers: this.headers});
  }
}
