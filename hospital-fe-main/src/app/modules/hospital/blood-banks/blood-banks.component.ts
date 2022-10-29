import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { BloodBank } from 'src/app/modules/hospital/model/blood-bank.model';
import { BloodBankService } from 'src/app/modules/hospital/services/blood-bank.service';

@Component({
  selector: 'app-blood-banks',
  templateUrl: './blood-banks.component.html',
  styleUrls: ['./blood-banks.component.css']
})
export class BloodBanksComponent implements OnInit {
  public dataSource = new MatTableDataSource<BloodBank>();
  public displayedColumns = ['Name', 'Server Address', 'Email Address'];
  public bloodBanks: BloodBank[] = [];
  
  constructor(private bloodBankService: BloodBankService, private router: Router) { }
  
  ngOnInit(): void {
    this.bloodBankService.getBloodBanks().subscribe(res => {
    this.bloodBanks = res;
    this.dataSource.data = this.bloodBanks;
    })
  }
  public addBloodBank() {
    this.router.navigate(['/bloodBanks/add']);
  }
}
