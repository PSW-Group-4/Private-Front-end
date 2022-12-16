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
    return this.http.get<FeedbackManagerResponseDto[]>(ConstSettings.apiHost + 'api/Feedback', { headers: ConstSettings.standardHeader });
  }


  publishHideFeedback(id: any, PublishHideDTO: any): Observable<any> {
    return this.http.patch<any>(ConstSettings.apiHost + 'api/feedback/publishhide/' + id, PublishHideDTO, { headers: ConstSettings.patchHeader });
  }
}
