import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AverageNumberOfTimesWentBackPerStep } from '../models/average-number-back-per-step.model';
import { FinishedUnfinishedStatistic } from '../models/finished-unfinished-statistic.model';
import { StatisticForTable } from '../models/statistics-for-table.model';

@Injectable({
  providedIn: 'root'
})
export class RenovationStatisticsService {

  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  readonly API = 'api/RenovationSessionStatistics';

  constructor(private http: HttpClient, private router: Router) {}

  getAverageNumberOfTimesWentBackPerStep(): Observable<AverageNumberOfTimesWentBackPerStep> {
    return this.http.get<AverageNumberOfTimesWentBackPerStep>(this.apiHost + this.API +"/average-number-went-back", {headers: this.headers});
  }

  getFinishedAndUnfinishedSessionStatistic(): Observable<FinishedUnfinishedStatistic> {
    return this.http.get<FinishedUnfinishedStatistic>(this.apiHost + this.API +"/finished-unfinished-statistics", {headers: this.headers});
  }

  getFinishedSessionStatisticsForTable(): Observable<StatisticForTable[]> {
    return this.http.get<StatisticForTable[]>(this.apiHost + this.API +"/statistics-for-table", {headers: this.headers});
  }

}
