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
  susCount: number = 0;

  displayedColumns: string[] = ['username', 'numberOfRecentSuspiciousActivities', "isBlocked", "blockunblock"];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.SuspiciousCount().subscribe(res => {
      this.susCount = res;
      console.log("Sus broj " + res);
    })


    this.userService.GetAllSuspiciousUsers().subscribe(res => {
      this.dataSource = res;
    })



  }

  block(username: string) {
    this.userService.block(username).subscribe(res => {
      const index = this.dataSource.findIndex(t => t.username === username);
      this.dataSource[index].isBlocked = true;
      this.dataSource = this.dataSource;

    }
      , err => {
        alert(err.error)
      }
    )

  }

  unblock(username: string) {
    this.userService.unblock(username).subscribe(res => {
      const index = this.dataSource.findIndex(t => t.username === username);
      this.dataSource[index].isBlocked = false;
      if (this.dataSource[index].numberOfRecentSuspiciousActivities <= this.susCount)
        this.dataSource = this.dataSource.filter(t => t.username !== username);
      this.dataSource = this.dataSource;


    }
      , err => {
        alert(err.error)
      }
    )

  }


}
