import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportStatisticsService {

  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }
  
  getNumberSteps(): Observable<any> {
    return this.http.get<any>(this.apiHost + 'api/MedAppReportStatistics/numberSteps', { headers: this.headers }
    );
  }

  getNumberEachStep(): Observable<any> {
    return this.http.get<any>(this.apiHost + 'api/MedAppReportStatistics/numberEachStep', { headers: this.headers }
    );
  }

  getTimeSteps(): Observable<any> {
    return this.http.get<any>(this.apiHost + 'api/MedAppReportStatistics/timeSteps', { headers: this.headers }
    );
  }

  getTimeEachStep(): Observable<any> {
    return this.http.get<any>(this.apiHost + 'api/MedAppReportStatistics/timeEachStep', { headers: this.headers }
    );
  }

  getDoctorTimeSteps(): Observable<any> {
    return this.http.get<any>(this.apiHost + 'api/MedAppReportStatistics/doctorTimeSteps', { headers: this.headers }
    );
  }
}
