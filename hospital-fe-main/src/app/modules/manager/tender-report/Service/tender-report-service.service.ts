import { Injectable } from '@angular/core';
import { ConstSettings } from '../../manager-feedback/constSettings';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TenderReportServiceService {

  constructor(private http: HttpClient) { }

  getPrice(month:String, year : String): Observable<String>{
    return this.http.get<String>(ConstSettings.apiHost + 'api/TenderReport/' + month + '/' + year, { headers: ConstSettings.standardHeader });
  }


  getLiters(bloodtype:String): Observable<number> {
    return this.http.get<number>(ConstSettings.apiHost + 'api/TenderReport/' + bloodtype, { headers: ConstSettings.patchHeader });
  }
}
