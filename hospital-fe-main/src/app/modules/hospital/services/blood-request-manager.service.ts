import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BloodRequestManager } from '../model/blood-request-manager.model';

@Injectable({
  providedIn: 'root'
})
export class BloodRequestManagerService {

  apiHost: string = 'http://localhost:45488/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getBloodRequestsManager(): Observable<BloodRequestManager[]> {
    return this.http.get<BloodRequestManager[]>(this.apiHost + 'api/ManagerRequest', {headers: this.headers});
  }
  addBloodRequestManager(bloodRequestManager : any): Observable<BloodRequestManager>{
    return this.http.post<BloodRequestManager>(this.apiHost + 'api/ManagerRequest', bloodRequestManager, {headers: this.headers});
  }
  
}
