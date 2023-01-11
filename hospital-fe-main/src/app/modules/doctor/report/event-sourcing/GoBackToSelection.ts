export interface GoBackToSelection{
    AggregateId : string;
    Selection :  Selection;
    OccurenceTime : Date; 
}

export enum Selection
{
    Symptom,
    ReportText,
    Medicine,
    Review
}
