import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/auth/services/login.service';

@Component({
  selector: 'app-manager-root',
  templateUrl: './manager-root.component.html',
  styleUrls: ['./manager-root.component.css']
})
export class ManagerRootComponent implements OnInit {

  constructor(private readonly loginService: LoginService) { }

  ngOnInit(): void {
  }

  logout = () =>
  {
    this.loginService.logout();
  }
}
