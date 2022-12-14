import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RenovationDto } from '../models/renovation-dto.model';
import { Renovation } from '../models/renovation.model';

@Injectable({
  providedIn: 'root'
})
export class RenovationService {

  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  readonly API = 'api/RenovationAppointment';

  constructor(private http: HttpClient) { }

  create(inputData : RenovationDto): Observable<any> {
    return this.http.post(this.apiHost+this.API, inputData ,{headers:this.headers});
  }

}
