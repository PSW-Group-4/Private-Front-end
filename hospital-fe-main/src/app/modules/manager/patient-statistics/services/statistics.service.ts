import { ConstSettings } from 'src/app/constSettings';
import { NumberOfPatientsByGenderDto } from './../model/numOfPatientsByGenderDto.model';
import { DoctorDto } from './../model/doctorDto.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NumberOfPatientsByAgeGroupDto } from '../model/numOfPatientsByAgeGroupDto.model';

@Injectable({
  providedIn: 'root',
})
export class StatisticsService {
  doctors: DoctorDto[] = [];

  constructor(private http: HttpClient) {}

  getAllDoctors(): Observable<DoctorDto[]> {
    //return this.doctors;
    return this.http.get<DoctorDto[]>(ConstSettings.apiHost + 'api/Doctor', {
      headers: ConstSettings.standardHeader,
    });
  }

  // getNumOfPatientsByAgeGroup() {
  //   return [
  //     { ageGroup: '0-12', numb: 1 },
  //     { ageGroup: '12-20', numb: 21 },
  //     { ageGroup: '21-40', numb: 3 },
  //     { ageGroup: '41-70', numb: 44 },
  //     { ageGroup: '71+', numb: 5 },
  //   ];
  // }

  getNumOfPatientsByAgeGroup(): Observable<NumberOfPatientsByAgeGroupDto[]> {
    return this.http.get<NumberOfPatientsByAgeGroupDto[]>(
      ConstSettings.apiHost + 'api/Patient/patientsByAgeGroup',
      { headers: ConstSettings.standardHeader }
    );
  }

  getNumOfPatientsByAgeGroupByDoctor(
    id: string
  ): Observable<NumberOfPatientsByAgeGroupDto[]> {
    if (id !== 'all') {
      return this.http.get<NumberOfPatientsByAgeGroupDto[]>(
        ConstSettings.apiHost + 'api/Patient/doctorsPatientsByAgeGroup/' + id,
        { headers: ConstSettings.standardHeader }
      );
    } else return this.getNumOfPatientsByAgeGroup();
  }

  getNumOfPatientsByGender(): Observable<NumberOfPatientsByGenderDto[]> {
    //return { male: 16, female: 21 };
    return this.http.get<NumberOfPatientsByGenderDto[]>(
      ConstSettings.apiHost + 'api/Patient/patientsByGender',
      { headers: ConstSettings.standardHeader }
    );
  }

  getAverageTimeSpentOnEachSelectionPerSession(): Observable<any> {
    return this.http.get<any>(
      ConstSettings.apiHost +
        'api/MedAppSchedulingStatistics/time-spent-per-selection',
      {
        headers: ConstSettings.standardHeader,
      }
    );
  }

  getAverageClickCountPerSession(): Observable<any> {
    return this.http.get<any>(
      ConstSettings.apiHost +
        'api/MedAppSchedulingStatistics/times-per-selection',
      { headers: ConstSettings.standardHeader }
    );
  }

  getTotalTimeSpentPerAgeGroup(): Observable<any> {
    return this.http.get<any>(
      ConstSettings.apiHost +
        'api/MedAppSchedulingStatistics/total-time-spent-per-age-group',
      { headers: ConstSettings.standardHeader }
    );
  }

  getTotalStepCountPerAgeGroup(): Observable<any> {
    return this.http.get<any>(
      ConstSettings.apiHost +
        'api/MedAppSchedulingStatistics/total-steps-per-age-group',
      { headers: ConstSettings.standardHeader }
    );
  }

  getSchedulingSuccessRatePerAgeGroup(): Observable<any> {
    return this.http.get<any>(
      ConstSettings.apiHost +
        'api/MedAppSchedulingStatistics/scheduling-success-rate-per-age-group',
      { headers: ConstSettings.standardHeader }
    );
  }

  getChosenCounterForEachDoctor(): Observable<any> {
    return this.http.get<any>(
      ConstSettings.apiHost +
        'api/MedAppSchedulingStatistics/number-of-chooses-per-doctor',
      { headers: ConstSettings.standardHeader }
    );
  }
}
