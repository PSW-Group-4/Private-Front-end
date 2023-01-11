import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChooseMedicine } from './event-sourcing/ChooseMedicine';
import { ChooseReportText } from './event-sourcing/ChooseReportText';
import { ChooseSymptom } from './event-sourcing/ChooseSymptom';
import { FinishScheduling } from './event-sourcing/FinishScheduling';
import { GoBackToSelection } from './event-sourcing/GoBackToSelection';
import { StartScheduling } from './event-sourcing/StartScheduling';

@Injectable({
  providedIn: 'root'
})
export class ReportEventSourcingService {
  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }
  
  basePath: string = this.apiHost + 'api/MedicalAppointmentReportEventSourcing/';
  
  startSchedulingSession = (dto : StartScheduling) : Observable<string> => {
    let path = this.basePath + 'start-scheduling';
    return this.http.post<string>(path, dto);
  }

  chooseSymptom = (dto : ChooseSymptom): Observable<void> => {
    let path = this.basePath + 'choose-symptom';
    return this.http.post<void>(path, dto);
  };

  chooseReportText = (dto : ChooseReportText): Observable<void> => {
    let path = this.basePath + 'choose-report-text';
    return this.http.post<void>(path, dto);
  };

  chooseMedicine = (dto : ChooseMedicine): Observable<void> => {
    let path = this.basePath + 'choose-medicine';
    return this.http.post<void>(path, dto);
  };

  finishScheduling = (dto : FinishScheduling): Observable<void> => {
    let path = this.basePath + 'finish-scheduling';
    return this.http.post<void>(path, dto);
  };

  goBackToSelection = (dto : GoBackToSelection): Observable<void> => {
    let path = this.basePath + 'go-back-to-selection';
    return this.http.post<void>(path, dto);
  };
}
