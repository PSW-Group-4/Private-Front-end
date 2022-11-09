import { DoctorDto } from './../model/doctorDto.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StatisticsService {
  doctors: DoctorDto[] = [
    new DoctorDto({ id: 1, fullname: 'Ime1 Prz1' }),
    new DoctorDto({ id: 2, fullname: 'Ime2 Prz2' }),
    new DoctorDto({ id: 3, fullname: 'Ime3 Prz3' }),
  ];

  constructor(private http: HttpClient) {}

  getAllDoctors() {
    return this.doctors;
  }

  getNumOfPatientsByAgeGroup() {
    return [
      { ageGroup: '0-12', numb: 1 },
      { ageGroup: '12-20', numb: 21 },
      { ageGroup: '21-40', numb: 3 },
      { ageGroup: '41-70', numb: 44 },
      { ageGroup: '71+', numb: 5 },
    ];
  }

  getNumOfPatientsByAgeGroupByDoctor(id: string) {
    switch (id) {
      case '1':
        return [
          { ageGroup: '0-12', numb: 4 },
          { ageGroup: '12-20', numb: 411 },
          { ageGroup: '21-40', numb: 43 },
          { ageGroup: '41-70', numb: 4 },
          { ageGroup: '71+', numb: 46 },
        ];
      case '2':
        return [
          { ageGroup: '0-12', numb: 621 },
          { ageGroup: '12-20', numb: 63 },
          { ageGroup: '21-40', numb: 6 },
          { ageGroup: '41-70', numb: 61 },
          { ageGroup: '71+', numb: 6 },
        ];
      case '3':
        return [
          { ageGroup: '0-12', numb: 83 },
          { ageGroup: '12-20', numb: 8 },
          { ageGroup: '21-40', numb: 82 },
          { ageGroup: '41-70', numb: 8 },
          { ageGroup: '71+', numb: 81 },
        ];
      default:
        return [
          { ageGroup: '0-12', numb: 1 },
          { ageGroup: '12-20', numb: 2 },
          { ageGroup: '21-40', numb: 3 },
          { ageGroup: '41-70', numb: 4 },
          { ageGroup: '71+', numb: 5 },
        ];
    }
  }

  getNumOfPatientsByGender() {
    return { male: 16, female: 21 };
  }
}
