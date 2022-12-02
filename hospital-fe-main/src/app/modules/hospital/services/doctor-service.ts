import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../model/appointment.model';
import { Doctor } from '../model/doctor.model';
import { Patient } from '../model/patient.model';
import { Room } from '../model/room.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getLoggedDoctor(): Observable<Doctor> {
    return this.http.get<Doctor>(this.apiHost + 'api/Doctor/loggedDoctor', {headers: this.headers});
  }
  
}