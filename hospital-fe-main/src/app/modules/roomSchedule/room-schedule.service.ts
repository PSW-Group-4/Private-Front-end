import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Appointment } from '../roomSchedule/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class RoomScheduleService {
  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  readonly API = 'api/BuildingMap';

  constructor(private http: HttpClient, private router: Router) {}

  // getBuildingMaps(): Observable<BuildingMap[]> {
  //   return this.http.get<BuildingMap[]>(this.apiHost + this.API, {headers: this.headers});
  // }

  getMoveEquipmentAppointment():Observable<Appointment[]>{
    return this.http.get<Appointment[]>(this.apiHost+ 'api/MoveEquipmentAppointment', {headers: this.headers})
  }

  getRenovationAppointments():Observable<Appointment[]>{
    return this.http.get<Appointment[]>(this.apiHost+ 'api/RenovationAppointment', {headers: this.headers})
  }

  getMedicalAppointments():Observable<Appointment[]>{
    return this.http.get<Appointment[]>(this.apiHost+ 'api/MedicalAppointment', {headers: this.headers})
  }

  getConsiliumAppointments():Observable<Appointment[]>{
    return this.http.get<Appointment[]>(this.apiHost+ 'api/ConsiliumAppointment', {headers: this.headers})
  }
  deleteMoveEquipmentAppointment(id: any): Observable<any> {
    return this.http.delete<any>(this.apiHost + 'api/MoveEquipmentAppointment/' + id, {headers: this.headers});
  }

  deleteRenovationAppointment(id: any): Observable<any> {
    return this.http.delete<any>(this.apiHost + 'api/RenovationAppointment/' + id, {headers: this.headers});
  }

  
}
