import { Component, OnInit } from '@angular/core';
import {BloodBank} from "../hospital/model/blood-bank.model";
import {Tender} from "../hospital/model/tender.model";
import {TenderService} from "../hospital/services/tender.service";
import {Router} from "@angular/router";
import {BloodType} from "../hospital/model/blood-type.model";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-tender',
  templateUrl: './create-tender.component.html',
  styleUrls: ['./create-tender.component.css']
})
export class CreateTenderComponent implements OnInit {

  constructor(private tenderService: TenderService,
              private router: Router,
              private _formBuilder: FormBuilder) { }
  public tender : Tender = new Tender();
  public n: number = 1;
  public bloodTypes: BloodType[] =
    [ { bloodGroup: "A", rhFactor: "POSITIVE"},
      { bloodGroup: "A", rhFactor: "NEGATIVE"},
      { bloodGroup: "B", rhFactor: "POSITIVE"},
      { bloodGroup: "B", rhFactor: "NEGATIVE"},
      { bloodGroup: "AB", rhFactor: "POSITIVE"},
      { bloodGroup: "AB", rhFactor: "NEGATIVE"},
      { bloodGroup: "O", rhFactor: "POSITIVE"},
      { bloodGroup: "O", rhFactor: "NEGATIVE"}
    ]
  public selected: BloodType[] = [];
  public isLinear: boolean = true;
  ngOnInit(): void {
  }

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  public onClick() {
    if (!this.isValidInput()) return;
    this.tenderService.create(this.tender).subscribe(res => {
      this.router.navigate(['/tenders']);
    });
  }

  onSelect(bloodType: any) {
    if(this.selected.includes(bloodType)) {
      this.selected = this.selected.filter(item => item !== bloodType);
    } else {
      this.selected.push(bloodType);
    }
    console.log(this.selected);
  }

  private isValidInput(): boolean {
    return this.tender?.bloodProducts != [];
  }
}
