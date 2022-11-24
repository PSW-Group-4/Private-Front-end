import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdmissionHistory } from '../../hospital/model/admission-history.model';
import { Admission } from '../../hospital/model/admission.model';
import { Appointment } from '../../hospital/model/appointment.model';
import { Doctor } from '../../hospital/model/doctor.model';
import { Patient } from '../../hospital/model/patient.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorAppointmentService {

  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getDoctorsOldAppointments(id: String): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.apiHost + 'api/DoctorAppointment/Old/' + id, {headers: this.headers});
  }

  getDoctorsCurrentAppointments(id: String): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.apiHost + 'api/DoctorAppointment/Current/' + id, {headers: this.headers});
  }

  deleteAppointmentEndSendNotification(id: any): Observable<any> {
    return this.http.delete<any>(this.apiHost + 'api/DoctorAppointment/Email/' + id, {headers: this.headers});
  }

  getAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.apiHost + 'api/Appointment', {headers: this.headers});
  }

  getAppointment(id: number): Observable<Appointment> {
    return this.http.get<Appointment>(this.apiHost + 'api/Appointment/' + id, {headers: this.headers});
  }

  deleteAppointment(id: any): Observable<any> {
    return this.http.delete<any>(this.apiHost + 'api/Appointment/' + id, {headers: this.headers});
  }

  createAppointment(appointment: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'api/Appointment', appointment, {headers: this.headers});
  }

  updateAppointment(appointment: any): Observable<any> {
    return this.http.put<any>(this.apiHost + 'api/Appointment/' + appointment.Id, appointment, {headers: this.headers});
  }

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.apiHost + 'api/Patient', {headers: this.headers});
  }

  getPatient(id: any): Observable<Patient> {
    return this.http.get<Patient>(this.apiHost + 'api/Patient/' + id, {headers: this.headers});
  }

  getTermins(date : any): Observable<Date[]> {
    return this.http.get<Date[]>(this.apiHost + 'api/Scheduling/' + date, {headers: this.headers});
  }

  getDoctor(id: any): Observable<Doctor> {
    return this.http.get<Doctor>(this.apiHost + 'api/Doctor/' + id, {headers: this.headers});
  }

  getAdmissions(): Observable<Admission[]>{
    return this.http.get<Admission[]>(this.apiHost + 'api/Admission' , {headers: this.headers});
  }

  getAdmission(id: any): Observable<any>{
    return this.http.get<Admission[]>(this.apiHost + 'api/Admission/' + id  , {headers: this.headers});
  }

  createAdmissionHistory(admissionHistory: any): Observable<any>{
    return this.http.post<any>(this.apiHost + 'api/AdmissionHistory', admissionHistory, {headers: this.headers});
  }

  getAdmissionHistories(): Observable<AdmissionHistory[]>{
    return this.http.get<AdmissionHistory[]>(this.apiHost + 'api/AdmissionHistory' , {headers: this.headers});
  }

  getAdmissionHistory(id: any): Observable<any>{
    return this.http.get<AdmissionHistory>(this.apiHost + 'api/AdmissionHistory/' + id  , {headers: this.headers});
  }

  generatePdf(id: any): Observable<any> {
    const requestOptions: Object = {
      observe: 'response',
      responseType: 'blob'
    }
    return this.http.get<any>(this.apiHost + 'api/MedicalRecordReport/' + id, requestOptions);
  }
}
