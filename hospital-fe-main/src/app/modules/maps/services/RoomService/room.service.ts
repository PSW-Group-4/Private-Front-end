import { Injectable } from '@angular/core';
import { Room } from '../../models/room.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RoomService {

  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  readonly API = 'api/Room';

  constructor(private http: HttpClient) { }

  updateRoom(room: Room): Observable<any> {
    return this.http.put(`${this.apiHost}${this.API}/${room.id}`, room);
  }

}
