import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';


export interface SuspiciousUser {
  username: string,
  isBlocked: boolean,
  numberOfRecentSuspiciousActivities: number
}

@Component({
  selector: 'app-manager-blocking-user',
  templateUrl: './manager-blocking-user.component.html',
  styleUrls: ['./manager-blocking-user.component.css']
})
export class ManagerBlockingUserComponent implements OnInit {
  dataSource: SuspiciousUser[] = []

  displayedColumns: string[] = ['username', 'numberOfRecentSuspiciousActivities', "isBlocked", "blockunblock"];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.GetAllSuspiciousUsers().subscribe(res => {
      this.dataSource = res;
    })



  }

  block(username: string) {
    this.userService.block(username).subscribe(res => {
      this.ngOnInit()
    }
      , err => {
        alert(err.error)
      }
    )

  }

  unblock(username: string) {
    this.userService.unblock(username).subscribe(res => {
      this.ngOnInit()


    }
      , err => {
        alert(err.error)
      }
    )

  }


}
