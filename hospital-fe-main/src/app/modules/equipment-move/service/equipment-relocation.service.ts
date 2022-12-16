import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipmentRelocationService {

  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  readonly API = 'api/Scheduling';

  constructor(private http: HttpClient) { }

  getAllRecommendations(relocationStart: String, duration:number, sourceId:String, targetId:String): Observable<any> {
    return this.http.get(this.apiHost+this.API+'/Recommend/'+relocationStart+'/'+duration+'/'+sourceId+'/'+targetId ,{headers:this.headers});
  }


}
