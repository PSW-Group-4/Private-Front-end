import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdmissionHistory } from '../../hospital/model/admission-history.model';
import { Admission } from '../../hospital/model/admission.model';
import { Appointment } from '../../hospital/model/appointment.model';
import { BloodConsumptionRecord } from '../../hospital/model/blood-consumption-record.model';
import { DateRange } from '../../hospital/model/daterange.model';
import { Doctor } from '../../hospital/model/doctor.model';
import { Medicine } from '../../hospital/model/medicine-model';
import { Patient } from '../../hospital/model/patient.model';
import { Treatment } from '../../hospital/model/treatment-model';

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

  getDoctorsAppointments(id: String): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.apiHost + 'api/DoctorAppointment/' + id, {headers: this.headers});
  }

  getYearlyDoctorAppointments(id: String, selectedYear: number): Observable <number[]> {
    return this.http.get<number[]>(this.apiHost + 'api/DoctorAppointment/Yearly/' + id + '/' + selectedYear, {headers: this.headers});
  }

  getMonthlyDoctorAppointments(id: String, selectedYear: number, selectedMonth: number): Observable <number[]> {
    return this.http.get<number[]>(this.apiHost + 'api/DoctorAppointment/Monthly/' + id + '/' + selectedYear + '/' + selectedMonth, {headers: this.headers});
  }

  deleteAppointmentEndSendNotification(id: any): Observable<any> {
    return this.http.delete<any>(this.apiHost + 'api/DoctorAppointment/Email/' + id, {headers: this.headers});
  }

  getAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.apiHost + 'api/MedicalAppointment', {headers: this.headers});
  }

  getAppointment(id: number): Observable<Appointment> {
    return this.http.get<Appointment>(this.apiHost + 'api/MedicalAppointment/' + id, {headers: this.headers});
  }

  deleteAppointment(id: any): Observable<any> {
    return this.http.delete<any>(this.apiHost + 'api/Appointment/' + id, {headers: this.headers});
  }

  createAppointment(appointment: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'api/MedicalAppointment', appointment, {headers: this.headers});
  }

  updateAppointment(appointment: any): Observable<any> {
    return this.http.put<any>(this.apiHost + 'api/MedicalAppointment/' + appointment.Id, appointment, {headers: this.headers});
  }

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.apiHost + 'api/Patient', {headers: this.headers});
  }

  getPatient(id: any): Observable<Patient> {
    return this.http.get<Patient>(this.apiHost + 'api/Patient/' + id, {headers: this.headers});
  }

  getTermins(date : any): Observable<DateRange[]> {
    return this.http.get<DateRange[]>(this.apiHost + 'api/Scheduling/' + date, {headers: this.headers});
  }

  getDoctor(id: any): Observable<Doctor> {
    return this.http.get<Doctor>(this.apiHost + 'api/Doctor/' + id, {headers: this.headers});
  }

  getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.apiHost + 'api/Doctor', {headers: this.headers});
  }

  getAdmissions(): Observable<Admission[]>{
    return this.http.get<Admission[]>(this.apiHost + 'api/Admission' , {headers: this.headers});
  }

  getAdmission(id: any): Observable<any>{
    return this.http.get<Admission[]>(this.apiHost + 'api/Admission/' + id  , {headers: this.headers});
  }

  createAdmission(admission: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'api/Admission', admission, {headers: this.headers});
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

  getTreatment(id: any): Observable<Treatment> {
    return this.http.get<Treatment>(this.apiHost + 'api/Treatment/' + id, {headers: this.headers});
  }
  getMedicine(id: any): Observable<Medicine> {
    return this.http.get<Medicine>(this.apiHost + 'api/Medicine/' + id, {headers: this.headers});
  }
  getMedicines(): Observable<Medicine[]> {
    return this.http.get<Medicine[]>(this.apiHost + 'api/Medicine' , {headers: this.headers});
  }

  getBlood(id: any): Observable<BloodConsumptionRecord> {
    return this.http.get<BloodConsumptionRecord>(this.apiHost + 'api/BloodConsumptionRecord/' + id, {headers: this.headers});
  }

  updateTreatmentMedicine(medicine: any, treatmentDto: any): Observable<any> {
    return this.http.put<any>(this.apiHost + 'TreatmentMedicine/' + medicine, treatmentDto, {headers: this.headers});
  }
  createTreatment(treatment: any): Observable<any>{
    return this.http.post<any>(this.apiHost + 'api/Treatment', treatment, {headers: this.headers});
  }
  createTreatmentInAdmission(treatmentId: any, admissionUpdateTreatmentDto: any): Observable<any> {
    return this.http.put<any>(this.apiHost + 'api/Admission/' + treatmentId + '/' + admissionUpdateTreatmentDto, {headers: this.headers});
  }

  updateTreatmentBlood(blood: any, treatmentDto: any): Observable<any> {
    return this.http.put<any>(this.apiHost + 'TreatmentBlood/' + blood, treatmentDto, {headers: this.headers});
  }

  getSpecialities(): Observable<string[]> {
    return this.http.get<string[]>(this.apiHost + 'api/Doctor/specialties', {headers: this.headers});
  }

  getTerminsForAnotherDoctor(dateStart : any, dateEnd : any, patientId : any, doctorId : any): Observable<DateRange[]> {
    return this.http.get<DateRange[]>(this.apiHost + 'api/Scheduling/Termins/' + dateStart + '/' + dateEnd + '/' + patientId + '/' + doctorId, {headers: this.headers});
  }

  getDoctorsWithSpecialty(specialty: any): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.apiHost + 'api/Doctor/specialties/' + specialty, {headers: this.headers})
  }
  
}
