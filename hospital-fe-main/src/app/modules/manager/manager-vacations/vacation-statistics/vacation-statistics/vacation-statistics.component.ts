import { DoctorAppointmentService } from './../../../../doctor/doctor-appointments/doctor-appointment.service';
//import { DoctorVacationService } from './../../../../doctor-vacation/doctor-vacation.service';
import { Doctor } from './../../../../hospital/model/doctor.model';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BarController, BarElement, CategoryScale, Chart, ChartConfiguration, ChartOptions, LinearScale } from 'chart.js';
import { Vacation } from 'src/app/modules/hospital/model/vacation.model';
import { DoctorVacationService } from 'src/app/modules/doctor/doctor-vacation/doctor-vacation.service';
import { color, reduce } from 'd3';


@Component({
  selector: 'app-vacation-statistics',
  templateUrl: './vacation-statistics.component.html',
  styleUrls: ['./vacation-statistics.component.css']
})
export class VacationStatisticsComponent implements OnInit {

  selectedDoctorVacations : Vacation[] = []
  selectedDoctor : Doctor = new Doctor;
  doctors: Doctor[] = [];
  vacationPerMonthList: number[] = [];
  chart5_data: any = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  public chart: any | undefined;
  @Input() chartData: any;

  constructor(private doctorService: DoctorVacationService, private doctorAppointmentService: DoctorAppointmentService) { }
  
  ngOnInit(): void {
    this.getDoctors();
  }


  calculateDoctorsVacationLength(selectedDoctor: Doctor){

    this.doctorService.getDoctorsPastVacationRequests(selectedDoctor.id).subscribe(res =>{
      this.vacationPerMonthList = res;
      console.log(this.vacationPerMonthList);
      this.createChart(this.vacationPerMonthList);
      
    })
  }


  createChart(monthlyVacations: number[]) {
    
    if (this.chart !== undefined) {
      this.chart.destroy();
    } 

    Chart.register(BarController, CategoryScale, LinearScale, BarElement);
    this.chart = new Chart('MyChart', {
      type: 'bar', 
      data: {

        labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
        datasets: [
          {
            label: 'Number of used vacation days per month',
            data: [ monthlyVacations[0], monthlyVacations[1], monthlyVacations[2], monthlyVacations[3], monthlyVacations[4], monthlyVacations[5], monthlyVacations[6], monthlyVacations[7], monthlyVacations[8], monthlyVacations[9], monthlyVacations[10], monthlyVacations[11], monthlyVacations[12] ],
            backgroundColor: '#89dee2', 
            barPercentage : 0.6,
            borderColor: [
              '#89dee2'
            ],
            hoverBackgroundColor: '#527c88',
            borderWidth: 1
          },
        ],
      },
      options:{
        maintainAspectRatio: false,
        plugins:{
          legend:{
            labels:{
              color: 'black',
              font:{
                size: 17
              }
            }
          }
        },
        scales: {
          y: {  
            ticks: {
              color: "black", 
              font: {
                size: 14, 
              },
            }
          },
          x: {  
            ticks: {
              color: "black",  
              font: {
                size: 14
              },
            }
          }
        }
        
      }
    });
  }

  getDoctors(): void{
    this.doctorAppointmentService.getDoctors().subscribe(res => {
      this.doctors = res;
    })
  }


}
