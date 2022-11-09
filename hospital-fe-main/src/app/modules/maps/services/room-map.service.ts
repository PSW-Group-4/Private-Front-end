import { Room } from './../models/room.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoomMap } from '../models/room-map.model';

@Injectable({
  providedIn: 'root'
})
export class RoomMapService {

  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  readonly API = 'api/RoomMap';

  constructor(private http: HttpClient) {}

  getRoomMaps(): Observable<RoomMap[]> {
    return this.http.get<RoomMap[]>(this.apiHost + this.API, {headers: this.headers});
  }

  getRoomMapById(id: string): Observable<RoomMap> {
    return this.http.get<RoomMap>(this.apiHost + this.API+"/"+id, {headers: this.headers});
  }

  getRoomMapsByFloorMapId(id: string): Observable<RoomMap[]> {
    return this.http.get<RoomMap[]>(this.apiHost + this.API+"/ByFloor/"+id, {headers: this.headers});
  }

  updateRoom(room: Room): Observable<any> {
    return this.http.put(`${this.apiHost}${this.API}/${room.id}`, room);
  }

  updateRoomMap(roomMap: RoomMap): Observable<any> {
    return this.http.put(`${this.apiHost}${this.API}/${roomMap.id}`, roomMap);
  }
}
