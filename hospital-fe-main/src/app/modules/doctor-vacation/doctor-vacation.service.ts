import { Doctor } from './../hospital/model/doctor.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vacation } from '../hospital/model/vacation.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorVacationService {
  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getDoctorsCurrentVacationRequests(id: String): Observable<Vacation[]> {
    return this.http.get<Vacation[]>(this.apiHost + 'api/DoctorVacation/CurrentRequests/' + id, {headers: this.headers});
  }

  getDoctorsDeniedVacationRequests(id: String): Observable<Vacation[]> {
    return this.http.get<Vacation[]>(this.apiHost + 'api/DoctorVacation/DeniedRequests/' + id, {headers: this.headers});
  }

  getDoctorsPastVacationRequests(id: String): Observable<Vacation[]> {
    return this.http.get<Vacation[]>(this.apiHost + 'api/DoctorVacation/PastRequests/' + id, {headers: this.headers});
  }

  deleteDoctorsPendingVacationReques(id: any): Observable<any> {
    return this.http.delete<any>(this.apiHost + 'api/DoctorVacation/PendingRequest/' + id, {headers: this.headers});
  }

  getVacationsByID(id: any): Observable<Vacation[]> {
    return this.http.get<Vacation[]>(this.apiHost + 'api/Vacation/AllVacationsRequests/' + id, {headers: this.headers});
  }

  getVacationByID(id: string): Observable<Vacation> {
    return this.http.get<Vacation>(this.apiHost + 'api/Vacation/' + id, {headers: this.headers});
  }

  getVacations(): Observable<Vacation[]> {
    return this.http.get<Vacation[]>(this.apiHost + 'api/Vacation', {headers: this.headers});
  }

  updateVacation(vacation: any): Observable<any> {
    return this.http.put<any>(this.apiHost + 'api/Vacation/' + vacation.id, vacation, {headers: this.headers});
  }

  deleteAppointment(id: any): Observable<any> {
    return this.http.delete<any>(this.apiHost + 'api/DoctorVacation/' + id, {headers: this.headers});
  }

  createAppointment(vacation: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'api/DoctorVacation', vacation, {headers: this.headers});
  }

  updateAppointment(vacation: any): Observable<any> {
    return this.http.put<any>(this.apiHost + 'api/AppoinDoctorVacationtment/' + vacation.id, vacation, {headers: this.headers});
  }
}
