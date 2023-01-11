import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Symptom } from '../../hospital/model/symptom.module';
import { Medicine } from '../../hospital/model/medicine-model';
import { Prescription } from '../../hospital/model/prescription.model';
import { Report } from '../../hospital/model/report.model';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getSymptoms(): Observable<Symptom[]> {
    return this.http.get<Symptom[]>(this.apiHost + 'api/Symptom', {headers: this.headers});
  }

  getMedicine(): Observable<Medicine[]> {
    return this.http.get<Medicine[]>(this.apiHost + 'api/Medicine', {headers: this.headers});
  }

  createPrescription(prescription: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'api/Prescription', prescription, {headers: this.headers});
  }

  getReports(): Observable<Report[]> {
    return this.http.get<Report[]>(this.apiHost + 'api/Report', {headers: this.headers});
  }

  getReport(id: number): Observable<Report> {
    return this.http.get<Report>(this.apiHost + 'api/Report/' + id, {headers: this.headers});
  }

  createReport(report: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'api/Report', report, {headers: this.headers});
  }
  
  updateReport(report: any): Observable<any> {
    return this.http.put<any>(this.apiHost + 'api/Report/' + report.Id, report, {headers: this.headers});
  }

  deleteReport(id: any): Observable<any> {
    return this.http.delete<any>(this.apiHost + 'api/Report/' + id, {headers: this.headers});
  }

  generatePdf(id: any, settings: any): Observable<any> {
    const requestOptions: Object = {
      observe: 'response',
      responseType: 'blob'
    }
    return this.http.get<any>(this.apiHost + 'api/Report/GeneratePdf/' + id + "/" + settings, requestOptions);
  }

  basicSearch(search: any): Observable<Report[]> {
    return this.http.get<Report[]>(this.apiHost + 'api/Report/search/' + search, {headers: this.headers});
  }

  advancedSearch(search: any): Observable<Report[]> {
    return this.http.get<Report[]>(this.apiHost + 'api/Report/advancedSearch/' + search, {headers: this.headers});
  }

}
