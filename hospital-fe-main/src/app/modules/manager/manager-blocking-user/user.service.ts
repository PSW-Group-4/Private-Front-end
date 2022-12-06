import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConstSettings } from 'src/app/constSettings';
import { SuspiciousUser } from './manager-blocking-user/manager-blocking-user.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  GetAllSuspiciousUsers(): Observable<SuspiciousUser[]> {
    return this.http.get<SuspiciousUser[]>(ConstSettings.apiHost + 'api/User/GetAllSuspiciousUsers', { headers: ConstSettings.standardHeader });
  }

  block(username: string): Observable<any> {
    return this.http.patch<any>(ConstSettings.apiHost + 'api/User/block-user/' + username, { headers: ConstSettings.standardHeader });
  }

  unblock(username: string): Observable<any> {
    return this.http.patch<any>(ConstSettings.apiHost + 'api/User/unblock-user/' + username, { headers: ConstSettings.standardHeader });
  }
}
