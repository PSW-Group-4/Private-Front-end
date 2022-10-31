import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConstSettings } from '../../constSettings';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

    getAllFeedbacks(): Observable<Object> {
    return this.http.get<Object[]>(ConstSettings.apiHost + 'api/Feedback', { headers: ConstSettings.standardHeader });
  }


   publishFeedback(id: any): Observable<any> {
    return this.http.get<any>(ConstSettings.apiHost  + 'api/feedback/publish/' + id, {headers:  ConstSettings.standardHeader});
   }

   hideFeedback(id: any): Observable<any> {
    return this.http.get<any>(ConstSettings.apiHost + 'api/feedback/hide/' + id, {headers:  ConstSettings.standardHeader});
  }



}
