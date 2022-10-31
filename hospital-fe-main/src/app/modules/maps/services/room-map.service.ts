import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoomMap } from '../models/room-map.model';

@Injectable({
  providedIn: 'root'
})
export class RoomMapService {

  readonly API = '/api/RoomMap';

  constructor(private http: HttpClient) {}

  getRoomMap(): Observable<RoomMap[]> {
    return this.http.get<RoomMap[]>(this.API);
  }

  updateRoomMap(roomMap: RoomMap): Observable<any> {
    return this.http.put(`${this.API}/${roomMap.id}`, roomMap);
  }
}
