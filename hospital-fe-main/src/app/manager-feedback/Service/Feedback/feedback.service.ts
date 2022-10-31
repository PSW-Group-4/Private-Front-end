import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FeedbackManagerResponseDto } from '../../Model/feedbackManagerResponseDto.model';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

    getAllFeedbacks(): Observable<FeedbackManagerResponseDto[]> {
    return this.http.get<FeedbackManagerResponseDto[]>(this.apiHost + 'api/Feedback', { headers: this.headers });
  }


   publishFeedback(id: any): Observable<any> {
    return this.http.get<any>(this.apiHost + 'api/feedback/publish/' + id, {headers: this.headers});
   }

   hideFeedback(id: any): Observable<any> {
    return this.http.get<any>(this.apiHost + 'api/feedback/hide/' + id, {headers: this.headers});
  }



}
