import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AverageNumberOfTimesWentBackPerStep } from "./models/average-number-back-per-step.model";
import { AverageTimeSpentOnSteps } from "./models/average-time-for-steps.model";
import { FinishedUnfinishedStatistic } from "./models/finished-unfinished-statistic.model";
import { NumberOfSessionLeftOff } from "./models/number-session-left-off-step.model";
import { StatisticForTable } from "./models/statistics-for-table.model";
import { RenovationStatisticsService } from "./service/renovation-statistics.service";

@Injectable({
    providedIn: 'root'
  })
export class RenovationStatisticsFacade {

  constructor(private renovationStatisticsService : RenovationStatisticsService) {  
  }

  getAverageNumberOfTimesWentBackPerStep$(): Observable<AverageNumberOfTimesWentBackPerStep> {
    return this.renovationStatisticsService.getAverageNumberOfTimesWentBackPerStep(); 
  }

  getFinishedAndUnfinishedSessionStatistic$(): Observable<FinishedUnfinishedStatistic> {
    return this.renovationStatisticsService.getFinishedAndUnfinishedSessionStatistic(); 
  }

  getFinishedSessionStatisticsForTable$(): Observable<StatisticForTable[]> {
    return this.renovationStatisticsService.getFinishedSessionStatisticsForTable(); 
  }

  getAverageTimeSpentOnStepsInSession$(): Observable<AverageTimeSpentOnSteps> {
    return this.renovationStatisticsService.getAverageTimeSpentOnStepsInSession(); 
  }

  getAverageTimeSpentOnStepsInSessionForTimeframe$(start : Date, end: Date): Observable<AverageTimeSpentOnSteps> {
    return this.renovationStatisticsService.getAverageTimeSpentOnStepsInSessionForTimeframe(start, end); 
  }

  getNumberOfSessionLeftOffOnEachStep$(): Observable<NumberOfSessionLeftOff> {
    return this.renovationStatisticsService.getNumberOfSessionLeftOffOnEachStep(); 
  }
}