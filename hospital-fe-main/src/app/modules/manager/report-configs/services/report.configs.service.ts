import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConstSettings } from '../../manager-feedback/constSettings';
import { ReportConfigurationDto } from '../model/reportConfigurationDto.model';

@Injectable({
  providedIn: 'root'
})
export class ReportConfigsService {

  constructor(private http: HttpClient) { 

  }
  getAllConfigs() :Observable<ReportConfigurationDto[]>{
    return this.http.get<ReportConfigurationDto[]>('http://localhost:45488/'  + 'api/ReportConfiguration', { headers:  ConstSettings.standardHeader });
  }
  updateReport(report : ReportConfigurationDto): Observable<ReportConfigurationDto> {
    return this.http.put<any>('http://localhost:45488/'  + 'api/ReportConfiguration',report, { headers:  ConstSettings.standardHeader });
  }
  createReport(report : ReportConfigurationDto): Observable<ReportConfigurationDto> {
    return this.http.post<any>('http://localhost:45488/'  + 'api/ReportConfiguration',report, { headers:  ConstSettings.standardHeader });
  }
  
}
