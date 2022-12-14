import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import {Tender} from "../model/tender.model";

@Injectable({
  providedIn: 'root'
})
export class TenderService {

  apiHost: string = 'http://localhost:5000/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  get(): Observable<Tender[]> {
    return this.http.get<Tender[]>(this.apiHost + 'api/Tender', {headers: this.headers});
  }
  getForReview() : Observable<Tender[]> {
    return this.http.get<Tender[]>(this.apiHost + 'api/Tender/active', {headers: this.headers});
  }
  create(dto: any): Observable<any> {
    //let bloodBankDto : any = JSON.stringify(bloodBank);
    return this.http.post<any>(this.apiHost + 'api/Tender/', JSON.stringify(dto), {headers: this.headers});
  }

}
