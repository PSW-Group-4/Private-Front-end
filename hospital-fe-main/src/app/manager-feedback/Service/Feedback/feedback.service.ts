import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

    getAllFeedbacks(): Observable<Object> {
    return this.http.get<Object[]>(this.apiHost + 'api/Feedback', { headers: this.headers });
  }


   publishFeedback(id: any): Observable<any> {
    return this.http.get<any>(this.apiHost + 'api/feedback/public/' + id, {headers: this.headers});
   }

   hideFeedback(id: any): Observable<any> {
    return this.http.get<any>(this.apiHost + 'api/feedback/private/' + id, {headers: this.headers});
  }



}
