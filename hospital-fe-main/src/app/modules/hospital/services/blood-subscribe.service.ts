import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BloodSubscribe } from '../model/blood-subscribe.model';

@Injectable({
  providedIn: 'root'
})
export class BloodSubscribeService {

  apiHost: string = 'http://localhost:45488/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getBloodSubscribes(): Observable<BloodSubscribe[]> {
    return this.http.get<BloodSubscribe[]>(this.apiHost + 'api/BloodSubscription', {headers: this.headers});
  }
  update(bloodSubscribe : any): Observable<BloodSubscribe>{
    return this.http.post<BloodSubscribe>(this.apiHost + 'api/BloodSubscription', bloodSubscribe, {headers: this.headers});
  }
  getBloodSubscriptionResponce(): Observable<BloodSubscribe[]>{
    return this.http.get<BloodSubscribe[]>(this.apiHost + 'api/BloodSubscriptionResponce', {headers: this.headers});
  }
}
