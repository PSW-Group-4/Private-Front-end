import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomMapService {

  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  readonly API = 'api/RoomMap';

  constructor(private http: HttpClient, private router: Router) {}

  checkIfRoomsAreAdjacent(id1: String, id2: String): Observable<Boolean> {
    return this.http.get<Boolean>(this.apiHost + this.API +"/CheckAdjacentRooms/"+ id1 +"/"+id2, {headers: this.headers});
  }

}
