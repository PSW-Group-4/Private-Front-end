import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BloodBank } from 'src/app/modules/hospital/model/blood-bank.model';
import { BloodBankService } from '../services/blood-bank.service';

@Component({
  selector: 'app-blood-bank-registration',
  templateUrl: './blood-bank-registration.component.html',
  styleUrls: ['./blood-bank-registration.component.css']
})
export  class BloodBankRegistrationComponent implements OnInit {

  public bloodBank : BloodBank = new BloodBank();
  constructor( private bloodBankService : BloodBankService, private router: Router ) { }

  ngOnInit(): void {
  }
  public createBloodBank() {
    if (!this.isValidInput()) return;
    this.bloodBankService.createBloodBank(this.bloodBank).subscribe(res => {
      this.router.navigate(['/bloodBanks']);
    });
  }

  private isValidInput(): boolean {
    return this.bloodBank?.emailAddress != '' && this.bloodBank?.name != '' && this.bloodBank?.serverAddress!= '';
  }

}
