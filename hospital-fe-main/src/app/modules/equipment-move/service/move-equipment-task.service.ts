import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MoveEquipmentTask } from '../model/move-equipment-task.model';

@Injectable({
  providedIn: 'root'
})
export class MoveEquipmentTaskService {

  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  readonly API = 'api/MoveEquipmentTask';

  constructor(private http: HttpClient) { }

  create(inputData : MoveEquipmentTask): Observable<any> {
    return this.http.post(this.apiHost+this.API, inputData ,{headers:this.headers});
  }


}
