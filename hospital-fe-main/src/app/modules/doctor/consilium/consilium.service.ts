import { HttpClient, HttpHeaders } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../../hospital/model/doctor.model';
import { Consilium } from './consilium.model';
import { ConsiliumRequest } from './consiliumRequest.model';

@Injectable({
  providedIn: 'root'
})
export class ConsiliumService {

  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.apiHost + 'api/Doctor', {headers: this.headers});
  }
  getSpecialities(): Observable<string[]> {
    return this.http.get<string[]>(this.apiHost + 'api/Doctor/specialties', {headers: this.headers});
  }
  sendConsiliumRequest(consiliumRequest:ConsiliumRequest): Observable<ConsiliumRequest> {
    return this.http.post<ConsiliumRequest>(this.apiHost + 'api/Consilium', consiliumRequest, {headers: this.headers});
  }
  getDoctorConsiliums(id: String): Observable<Consilium[]>{
    return this.http.get<Consilium[]>(this.apiHost + 'api/Consilium/GetByDoctor/' + id, {headers: this.headers});
  }
  getLoggedDoctor(): Observable<Doctor>{
    return this.http.get<Doctor>(this.apiHost + 'api/Doctor/loggedDoctor', {headers: this.headers});
  }
  getConsiliumById(id: string): Observable<Consilium>{
    return this.http.get<Consilium>(this.apiHost + 'api/Consilium/' + id, {headers: this.headers});
  }
}

