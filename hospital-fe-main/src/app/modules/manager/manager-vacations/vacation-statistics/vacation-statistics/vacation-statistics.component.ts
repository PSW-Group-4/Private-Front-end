import { DoctorAppointmentService } from './../../../../doctor/doctor-appointments/doctor-appointment.service';
//import { DoctorVacationService } from './../../../../doctor-vacation/doctor-vacation.service';
import { Doctor } from './../../../../hospital/model/doctor.model';
import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { Vacation } from 'src/app/modules/hospital/model/vacation.model';
import { DoctorVacationService } from 'src/app/modules/doctor/doctor-vacation/doctor-vacation.service';

@Component({
  selector: 'app-vacation-statistics',
  templateUrl: './vacation-statistics.component.html',
  styleUrls: ['./vacation-statistics.component.css']
})
export class VacationStatisticsComponent implements OnInit {

  selectedDoctorVacations : Vacation[] = []
  selectedDoctor : Doctor = new Doctor;
  doctors: Doctor[] = [];

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ],
    datasets: [
      {
        data: [ 0, 4, 3, 10, 15, 22, 4, 0, 0, 3, 2, 1 ], //ovo su podaci koji meni trebaju
        label: 'Vacation requests',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,100,0.3)'
      }
    ]
  };

  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };

  public lineChartLegend = true;

  constructor(private doctorService: DoctorVacationService, private doctorAppointmentService: DoctorAppointmentService) { }

  ngOnInit(): void {
    this.getDoctors();
  }


  public getStatisticsByDoctor(selectedDoctor: Doctor): void{
    this.doctorService.getDoctorsPastVacationRequests(selectedDoctor.id).subscribe(res =>{
      this.selectedDoctorVacations = res;
      console.log(this.selectedDoctorVacations);

    })
  }

  public getDoctors(): void{
    this.doctorAppointmentService.getDoctors().subscribe(res => {
      this.doctors = res;
      console.log(this.doctors);
    })
  }

}
