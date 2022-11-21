import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { BloodBank } from '../model/blood-bank.model';

@Injectable({
  providedIn: 'root'
})
export class BloodBankService {

  apiHost: string = 'http://localhost:45488/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getBloodBanks(): Observable<BloodBank[]> {
    return this.http.get<BloodBank[]>(this.apiHost + 'api/BloodBank', {headers: this.headers});
  }

  getBloodBank(id: number): Observable<BloodBank> {
    return this.http.get<BloodBank>(this.apiHost + 'api/BloodBank/' + id, {headers: this.headers});
  }

  deleteBloodBank(id: any): Observable<any> {
    return this.http.delete<any>(this.apiHost + 'api/BloodBank/' + id, {headers: this.headers});
  }

  createBloodBank(bloodBankDto: any): Observable<any> {
    //let bloodBankDto : any = JSON.stringify(bloodBank);
    return this.http.post<any>(this.apiHost + 'api/BloodBank/', bloodBankDto, {headers: this.headers});
  }

  updateBloodBank(bloodBank: any): Observable<any> {
    return this.http.put<any>(this.apiHost + 'api/bloodBanks/' + bloodBank.id, bloodBank, {headers: this.headers});
  }

  checkBloodSupplies(location: string, bloodType: string, quantity: number = 0): Observable<any>{
    return this.http.get<any>(location + 'blood-supply/', {headers: this.headers, params: {bloodType, quantity}}).pipe(catchError(this.errorHandler));;
  }

  errorHandler(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
      alert("Something very bad is happening please contact Aca")
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
      alert("There is no working blood bank on this address :(")
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
