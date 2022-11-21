import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ManagerNews } from '../model/managerNews.model';

@Injectable({
  providedIn: 'root'
})
export class ManagerNewsService {

  apiHost: string = 'http://localhost:45488/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getManagerNews(): Observable<ManagerNews[]> {
    return this.http.get<ManagerNews[]>(this.apiHost + 'api/News', {headers: this.headers});
  }

  publishNews(id: any): Observable<any> {
    return new Observable;
  }

  archiveNews(id: any): Observable<any> {
    return new Observable;
  }
}
