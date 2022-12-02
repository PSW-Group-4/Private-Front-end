import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/auth/services/login.service';
import { Doctor } from '../../hospital/model/doctor.model';
import { DoctorService } from '../../hospital/services/doctor-service';

@Component({
  selector: 'app-doctor-root',
  templateUrl: './doctor-root.component.html',
  styleUrls: ['./doctor-root.component.css']
})
export class DoctorRootComponent implements OnInit {

  constructor(private readonly loginService: LoginService, private readonly doctorService: DoctorService) { }

  loggedDoctor : Doctor = new Doctor
  ngOnInit(): void {
    this.doctorService.getLoggedDoctor().subscribe(res => {
      this.loggedDoctor = res;
      console.log(res.name + ' ' + res.surname)
    })
  }
   
  logout = () =>
  {
    this.loginService.logout();
  }

}
