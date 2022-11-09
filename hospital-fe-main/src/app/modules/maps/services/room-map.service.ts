import { Router } from '@angular/router';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoomMap } from '../models/room-map.model';
import { Room } from '../models/room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomMapService {

  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  readonly API = 'api/RoomMap';

  constructor(private http: HttpClient, private router: Router) {}

  getRoomMaps(): Observable<RoomMap[]> {
    return this.http.get<RoomMap[]>(this.apiHost + this.API, {headers: this.headers});
  }

  getRoomMapById(id: string): Observable<RoomMap> {
    return this.http.get<RoomMap>(this.apiHost + this.API+"/"+id, {headers: this.headers});
  }

  getRoomMapsByFloorMapId(id: string): Observable<RoomMap[]> {
    return this.http.get<RoomMap[]>(this.apiHost + this.API+"/ByFloor/"+id, {headers: this.headers});
  }

  updateRoomMap(roomMap: RoomMap): Observable<any> {
    return this.http.put(`${this.apiHost}${this.API}/${roomMap.id}`, roomMap);
  }

  updateRoom(room: Room): Observable<any> {
    return this.http.put(`${this.apiHost}${this.API}/${room.id}`, room);
  }

}
