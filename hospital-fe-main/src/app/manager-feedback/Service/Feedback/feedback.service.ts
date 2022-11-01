import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConstSettings } from '../../constSettings';
import { FeedbackManagerResponseDto } from '../../Model/feedbackManagerResponseDto.model';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {


  constructor(private http: HttpClient) { }

    getAllFeedbacks(): Observable<FeedbackManagerResponseDto[]> {
    return this.http.get<FeedbackManagerResponseDto[]>(ConstSettings.apiHost  + 'api/Feedback', { headers:  ConstSettings.standardHeader });
  }


   publishFeedback(id: any): Observable<any> {
    return this.http.get<any>(ConstSettings.apiHost + 'api/feedback/publish/' + id, {headers: ConstSettings.standardHeader});
   }

   hideFeedback(id: any): Observable<any> {
    return this.http.get<any>(ConstSettings.apiHost  + 'api/feedback/hide/' + id, {headers: ConstSettings.standardHeader});
  }



}
