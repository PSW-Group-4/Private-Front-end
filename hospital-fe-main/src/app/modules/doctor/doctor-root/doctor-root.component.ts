import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/auth/services/login.service';

@Component({
  selector: 'app-doctor-root',
  templateUrl: './doctor-root.component.html',
  styleUrls: ['./doctor-root.component.css']
})
export class DoctorRootComponent implements OnInit {

  constructor(private readonly loginService: LoginService) { }

  ngOnInit(): void {
  }
   
  logout = () =>
  {
    this.loginService.logout();
  }

}
