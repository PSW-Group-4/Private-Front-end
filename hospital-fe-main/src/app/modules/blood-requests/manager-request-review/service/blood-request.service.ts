import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BloodRequest } from '../../blood-request.model';

@Injectable({
  providedIn: 'root'
})
export class BloodRequestService {

  apiHost: string = 'http://localhost:5000/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getBloodRequests(): Observable<BloodRequest[]> {
    return this.http.get<BloodRequest[]>(this.apiHost + 'api/BloodRequest', {headers: this.headers});
  }
  update(bloodRequest : any): Observable<BloodRequest>{
    return this.http.post<BloodRequest>(this.apiHost + 'api/BloodRequest/update', bloodRequest);
  }
  getUnapproved(): Observable<BloodRequest[]>{
    return this.http.get<BloodRequest[]>(this.apiHost + 'api/BloodRequest/unapproved', {headers: this.headers});
  }
}
