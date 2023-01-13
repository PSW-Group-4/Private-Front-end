import { MatSelectModule } from '@angular/material/select';
import { Appointment } from 'src/app/modules/hospital/model/appointment.model';
import { Component, Input, OnInit } from '@angular/core';
import { DoctorAppointmentService } from 'src/app/modules/doctor/doctor-appointments/doctor-appointment.service';
import { Doctor } from 'src/app/modules/hospital/model/doctor.model';
import { BarController, BarElement, CategoryScale, Chart, LinearScale } from 'chart.js';

@Component({
  selector: 'app-appointment-statistics',
  templateUrl: './appointment-statistics.component.html',
  styleUrls: ['./appointment-statistics.component.css']
})
export class AppointmentStatisticsComponent implements OnInit {

  selectedDoctor : Doctor = new Doctor;
  doctors: Doctor[] = [];

  chart: any | undefined;
  @Input() chartData: any;
  
  selectedYear : number = 0;
  years: number[] = [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033];
  selectedMonth : number = 0;
  months: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  appointments: Appointment[] = [];

  isDoctorSelected: boolean = false;
  isYearSelected: boolean = false;

  appointmentsPerYearList : number[] = [];
  appointmentsPerMonthList: number[] = [];

  constructor(private doctorAppointmentService: DoctorAppointmentService) { }

  ngOnInit(): void {
    this.getDoctors();
  }

  getDoctors(): void{
    this.doctorAppointmentService.getDoctors().subscribe(res => {
      this.doctors = res;
    })
  }


  doctorSelect(selectedDoctor: Doctor){
    this.doctorAppointmentService.getDoctorsAppointments(selectedDoctor.id).subscribe(res => {
      this.appointments = res;
      console.log(this.appointments);
      this.isDoctorSelected = true;
      //this.se
    })
  } 


  yearSelect(selectedDoctor: Doctor, selectedYear: number){
    this.isYearSelected = true;
    this.doctorAppointmentService.getYearlyDoctorAppointments(selectedDoctor.id, selectedYear).subscribe(res => {
      this.appointmentsPerYearList = res;
      console.log(this.appointmentsPerYearList);
      this.createChart1(this.appointmentsPerYearList, selectedYear);
    })
    
  }

  monthSelect(selectedDoctor: Doctor, selectedYear: number, selectedMonth: number){
    this.doctorAppointmentService.getMonthlyDoctorAppointments(selectedDoctor.id, selectedYear, selectedMonth).subscribe(res => {
      this.appointmentsPerMonthList = res;
      console.log(this.appointmentsPerMonthList);
      this.createChart2(this.appointmentsPerMonthList, selectedMonth);
    })
  }

  createChart1(monthlyAppointments : number[], selectedYear: number) { 
    if (this.chart !== undefined) {
      this.chart.destroy();
    } 

    Chart.register(BarController, CategoryScale, LinearScale, BarElement);
    this.chart = new Chart('YearChart', {
      type: 'bar', 
      data: {

        labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
        datasets: [
          {
            label: `Number of appointments per month for year: ${selectedYear}`,
            
            data: [ monthlyAppointments[0], monthlyAppointments[0], monthlyAppointments[1], monthlyAppointments[2], monthlyAppointments[3], monthlyAppointments[4], monthlyAppointments[5], monthlyAppointments[6], monthlyAppointments[7], monthlyAppointments[8], monthlyAppointments[9], monthlyAppointments[10], monthlyAppointments[11] ],
            backgroundColor: 'rgb(120,120,160)', 
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

  createChart2(dailyAppointments : number[], selectedMonth: number) { 
    if (this.chart !== undefined) {
      this.chart.destroy();
    } 

    Chart.register(BarController, CategoryScale, LinearScale, BarElement);
    this.chart = new Chart('YearChart', {
      type: 'bar', 
      data: {

        labels: [ '1.', '2.', '3.', '4.', '5.', '6.', '7.', '8.', '9.', '10.', '11.', '12.', '13.', '14.', '15.', '16.', '17.', '18.', '19.', '20.', '21.', '22.', '23.', '24.', '25.', '26.', '27.', '28.', '29.', '30.', '31.', ],
        datasets: [
          {
            label: `Number of appointments per day for month: ${selectedMonth}`,
            
            data: [ dailyAppointments[0], dailyAppointments[1], dailyAppointments[2], dailyAppointments[3], dailyAppointments[4], dailyAppointments[5], dailyAppointments[6], dailyAppointments[7], dailyAppointments[8], dailyAppointments[9], dailyAppointments[10], dailyAppointments[11], dailyAppointments[12], dailyAppointments[13], dailyAppointments[14], dailyAppointments[15], dailyAppointments[16], dailyAppointments[17], dailyAppointments[18], dailyAppointments[19], dailyAppointments[20], dailyAppointments[21], dailyAppointments[22], dailyAppointments[23], dailyAppointments[24], dailyAppointments[25], dailyAppointments[26], dailyAppointments[27], dailyAppointments[28], dailyAppointments[29], dailyAppointments[30], ],
            backgroundColor: 'rgb(120,120,160)', 
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


}
