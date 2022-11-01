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

  updateRoomMap(roomMap: RoomMap): Observable<any> {
    return this.http.put(`${this.apiHost}${this.API}/${roomMap.id}`, roomMap);
  }
}
