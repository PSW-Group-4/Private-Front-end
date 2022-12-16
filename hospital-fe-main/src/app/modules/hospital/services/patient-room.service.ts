import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../model/appointment.model';
import { Doctor } from '../model/doctor.model';
import { Room } from '../model/room.model';
import { PatientRoom } from '../model/patient-room.model';


@Injectable({
  providedIn: 'root'
})
export class PatientRoomService {

  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getAll(): Observable<PatientRoom[]> {
    return this.http.get<PatientRoom[]>(this.apiHost + 'api/PatientRoom', {headers: this.headers});
  }

  getRoomsWithFreeBeds(): Observable<PatientRoom[]> {
    return this.http.get<PatientRoom[]>(this.apiHost + 'RoomsWithFreeBeds', {headers: this.headers});
  }
  
  captureBed(patientRoom: any): Observable<any> {
    return this.http.put<any>(this.apiHost + 'Capture', patientRoom, {headers: this.headers});
  }

  freeBed(patientRoom: any): Observable<any> {
    return this.http.put<any>(this.apiHost + 'Free', patientRoom, {headers: this.headers});
  }
}