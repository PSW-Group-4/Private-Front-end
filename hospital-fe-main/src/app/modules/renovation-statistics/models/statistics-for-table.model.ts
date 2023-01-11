import { AverageTimeSpentOnSteps } from "./average-time-for-steps.model";

export class StatisticForTable {
    
    startTime : number = 0;
    totalTime : number = 0;
    timesGoneBack : number = 0;
    averageTime : AverageTimeSpentOnSteps = new AverageTimeSpentOnSteps();
    public constructor(obj?: any) {
        if (obj) {  
        }
    }
}
        