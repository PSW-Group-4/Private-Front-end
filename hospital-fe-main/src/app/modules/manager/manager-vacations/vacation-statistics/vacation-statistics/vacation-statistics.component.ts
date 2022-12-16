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
  private chartValues: string[] = [];
  private chartLabels: string[] = [];

  // lineChartData: ChartConfiguration<'line'>['data'] = {
    
  //   labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
  //   datasets: [
  //     {
  //       data: [ this.vacationPerMonthList[0], this.vacationPerMonthList[1], this.vacationPerMonthList[2], this.vacationPerMonthList[3], this.vacationPerMonthList[4], this.vacationPerMonthList[5], this.vacationPerMonthList[6], this.vacationPerMonthList[7], this.vacationPerMonthList[8], this.vacationPerMonthList[9], this.vacationPerMonthList[10], this.vacationPerMonthList[11], this.vacationPerMonthList[12] ], //ovo su podaci koji meni trebaju
  //       label: 'Vacation requests',
  //       fill: true,
  //       tension: 0.5,
  //       borderColor: 'black',
  //       backgroundColor: 'rgba(128,0,100,0.3)',
  //     }
  //   ]

  // };

  // public lineChartOptions: ChartOptions<'line'> = {
  //   responsive: false
  // };

  // vacationChart: Chart = new Chart('chart5', {
  //   type: 'line',
  //   data: {
  //     labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
  //     datasets: [
  //       {
  //         label: 'Iskorisceni godisnji dani po mesecu',
  //         data: this.chart5_data, 
  //         backgroundColor: 'rgba(128,0,100,0.3)',
  //         borderColor: 'black',
  //         borderWidth : 2,
  //       },
  //     ],
  //   },
  //   options:{
  //     responsive : true,
  //     scales:{
  //       y: {
  //         beginAtZero: true,
  //       },
  //     },
  //   },
  // });

  // public lineChartLegend = true;

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
            backgroundColor: 'rgb(200,200,160)', 
            barPercentage : 0.6,
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)'
            ],
            hoverBackgroundColor: 'gray',
            borderWidth: 1
          },
        ],
      },
      options:{
        maintainAspectRatio: false,
        //aspectRatio: 3.5,
        plugins:{
          legend:{
            labels:{
              color: "black",
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
                size: 15, 
              },
            }
          },
          x: {  
            ticks: {
              color: "black",  
              font: {
                size: 15
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
