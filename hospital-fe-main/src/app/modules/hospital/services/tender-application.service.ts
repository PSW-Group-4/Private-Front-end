import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { TenderApplication } from '../model/tender-application.model';
import {Tender} from "../model/tender.model";

@Injectable({
  providedIn: 'root'
})
export class TenderApplicationService {

  apiHost: string = 'http://localhost:5000/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  get(): Observable<TenderApplication[]> {
    return this.http.get<TenderApplication[]>(this.apiHost + 'api/TenderApplication', {headers: this.headers});
  }
  GetByTender(tenderId : string) : Observable<TenderApplication[]> {
    return this.http.post<any[]>(this.apiHost + 'api/TenderApplication/tender?tenderId='+ tenderId, {headers: this.headers});
  }
  acceptOffer(tenderApplication : TenderApplication){
    return this.http.post<any>(this.apiHost + 'api/TenderApplication/accept?applicationId='+ tenderApplication.applicationId, {headers: this.headers})
  }
  

}