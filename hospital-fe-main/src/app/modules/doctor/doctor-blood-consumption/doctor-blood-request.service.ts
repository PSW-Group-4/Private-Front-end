import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BloodRequest } from '../../hospital/model/blood-request.model';

@Injectable({
  providedIn: 'root'
})
export class BloodRequestService {

  apiHost: string = 'http://localhost:45488/'; // ili port: 45488
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getBloodRequests(): Observable<BloodRequest[]> {
    return this.http.get<BloodRequest[]>(this.apiHost + 'api/BloodRequest', {headers: this.headers});
  }

  getBloodRequest(id: number): Observable<BloodRequest> {
    return this.http.get<BloodRequest>(this.apiHost + 'api/BloodRequest/' + id, {headers: this.headers});
  }

  createBloodRequest(bloodRequest: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'api/BloodRequest', bloodRequest, {headers: this.headers});
  }
  
  updateBloodRequest(bloodRequest: any): Observable<any> {
    return this.http.put<any>(this.apiHost + 'api/BloodRequest/' + bloodRequest.Id, bloodRequest, {headers: this.headers});
  }

  deleteBloodRequest(id: any): Observable<any> {
    return this.http.delete<any>(this.apiHost + 'api/BloodRequest/' + id, {headers: this.headers});
  }
}
