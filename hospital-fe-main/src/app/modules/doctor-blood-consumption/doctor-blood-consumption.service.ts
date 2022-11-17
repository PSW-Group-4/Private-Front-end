import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BloodConsumptionRecord } from '../hospital/model/blood-consumption-record.model';

@Injectable({
  providedIn: 'root'
})
export class BloodConsumptionRecordService {

  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getBloodConsumptionRecords(): Observable<BloodConsumptionRecord[]> {
    return this.http.get<BloodConsumptionRecord[]>(this.apiHost + 'api/BloodConsumptionRecord', {headers: this.headers});
  }

  getBloodConsumptionRecord(id: number): Observable<BloodConsumptionRecord> {
    return this.http.get<BloodConsumptionRecord>(this.apiHost + 'api/BloodConsumptionRecord/' + id, {headers: this.headers});
  }

  createBloodConsumptionRecord(bloodConsumptionRecord: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'api/BloodConsumptionRecord', bloodConsumptionRecord, {headers: this.headers});
  }
  
  updateBloodConsumptionRecord(bloodConsumptionRecord: any): Observable<any> {
    return this.http.put<any>(this.apiHost + 'api/BloodConsumptionRecord/' + bloodConsumptionRecord.Id, bloodConsumptionRecord, {headers: this.headers});
  }

  deleteBloodConsumptionRecord(id: any): Observable<any> {
    return this.http.delete<any>(this.apiHost + 'api/BloodConsumptionRecord/' + id, {headers: this.headers});
  }
}
