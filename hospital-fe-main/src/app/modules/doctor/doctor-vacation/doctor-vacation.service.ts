import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vacation } from '../../hospital/model/vacation.model';
//import { Vacation } from '../hospital/model/vacation.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorVacationService {
  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  GetDoctorVacationsFromSpecificStatus(status: number, id: String): Observable<Vacation[]> {
    return this.http.get<Vacation[]>(this.apiHost + 'api/Vacation/' + status + '/' + id, {headers: this.headers});
  }

  getDoctorsDeniedVacationRequests(id: String): Observable<Vacation[]> {
    return this.http.get<Vacation[]>(this.apiHost + 'api/DoctorVacation/DeniedRequests/' + id, {headers: this.headers});
  }

  getDoctorsPastVacationRequests(doctorId: String): Observable <number[]> {
    return this.http.get<number[]>(this.apiHost + 'api/pastVacations/' + doctorId, {headers: this.headers});
  }

  deleteDoctorsPendingVacationReques(id: any): Observable<any> {
    return this.http.delete<any>(this.apiHost + 'api/Vacation/' + id, {headers: this.headers});
  }

  getVacationsByID(id: any): Observable<Vacation[]> {
    return this.http.get<Vacation[]>(this.apiHost + 'api/Vacation/AllVacationsRequests/' + id, {headers: this.headers});
  }

  getVacations(): Observable<Vacation[]> {
    return this.http.get<Vacation[]>(this.apiHost + 'api/Vacation', {headers: this.headers});
  }

  deleteAppointment(id: any): Observable<any> {
    return this.http.delete<any>(this.apiHost + 'api/DoctorVacation/' + id, {headers: this.headers});
  }

  createVacation(vacation: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'api/Vacation', vacation, {headers: this.headers});
  }

  updateAppointment(vacation: any): Observable<any> {
    return this.http.put<any>(this.apiHost + 'api/AppoinDoctorVacationtment/' + vacation.Id, vacation, {headers: this.headers});
  }

  updateVacation(vacation: Vacation): Observable<Vacation> {
    return this.http.put<Vacation>(this.apiHost + 'api/Vacation/' + vacation.id, vacation, {headers: this.headers});
  }
}
