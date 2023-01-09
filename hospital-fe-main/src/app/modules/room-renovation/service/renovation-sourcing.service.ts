import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RenovationDto } from '../models/renovation-dto.model';
import { RenovationSessionWDates } from '../models/renovation-session-with-dates';
import { RenovationSessionWId } from '../models/renovation-session-with-id';
import { RenovationSessionWRooms } from '../models/renovation-session-with-rooms';
import { RenovationSessionWType } from '../models/renovation-session-with-type';
import { Renovation } from '../models/renovation.model';

@Injectable({
  providedIn: 'root'
})
export class RenovationSessionService {

  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  readonly API = 'api/RenovationSession';

  constructor(private http: HttpClient) { }

  chooseOldRooms(inputData : RenovationSessionWRooms): Observable<any> {
    return this.http.post(this.apiHost+this.API+"/choose-old-rooms", inputData ,{headers:this.headers});
  }

  chooseSpecificTime(inputData : RenovationSessionWDates): Observable<any> {
    return this.http.post(this.apiHost+this.API+"/choose-specific-time", inputData ,{headers:this.headers});
  }

  chooseType(inputData : RenovationSessionWType): Observable<any> {
    return this.http.post(this.apiHost+this.API+"/choose-type", inputData ,{headers:this.headers});
  }

  createNewRooms(inputData : RenovationSessionWRooms): Observable<any> {
    return this.http.post(this.apiHost+this.API+"/create-new-rooms", inputData ,{headers:this.headers});
  }

  createTimeframe(inputData : RenovationSessionWDates): Observable<any> {
    return this.http.post(this.apiHost+this.API+"/create-timeframe", inputData ,{headers:this.headers});
  }

  endSession(inputData : RenovationSessionWId): Observable<any> {
    return this.http.post(this.apiHost+this.API+"/end-session", inputData ,{headers:this.headers});
  }

  returnToNewRoomCreation(inputData : RenovationSessionWId): Observable<any> {
    return this.http.post(this.apiHost+this.API+"/return-to-new-room-creation", inputData ,{headers:this.headers});
  }

  returnToOldRoomsSelection(inputData : RenovationSessionWId): Observable<any> {
    return this.http.post(this.apiHost+this.API+"/return-to-old-rooms-selection", inputData ,{headers:this.headers});
  }

  returnToSpecificTimeSelection(inputData : RenovationSessionWId): Observable<any> {
    return this.http.post(this.apiHost+this.API+"/return-to-specific-time-selection", inputData ,{headers:this.headers});
  }

  returnToTimeframeCreation(inputData : RenovationSessionWId): Observable<any> {
    return this.http.post(this.apiHost+this.API+"/return-to-timeframe-creation", inputData ,{headers:this.headers});
  }

  returnToTypeSelection(inputData : RenovationSessionWId): Observable<any> {
    return this.http.post(this.apiHost+this.API+"/return-to-type-selection", inputData ,{headers:this.headers});
  }

  startSession(): Observable<any> {
    return this.http.post(this.apiHost+this.API+"/start-session" ,{headers:this.headers});
  }

}
