import { Component, OnInit } from '@angular/core';
import {BloodBank} from "../hospital/model/blood-bank.model";
import {Tender} from "../hospital/model/tender.model";
import {TenderService} from "../hospital/services/tender.service";
import {Router} from "@angular/router";
import {BloodType} from "../hospital/model/blood-type.model";
import {FormBuilder, Validators} from "@angular/forms";
import {BloodProduct} from "../hospital/model/blood-product.model";

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
  public bloodProducts: BloodProduct[] = []
  public selected: BloodType[] = [];
  public isLinear: boolean = true;
  public deadline: any;
  public isDeadlineDisabled: boolean = false;

  ngOnInit(): void {
  }
  trackByIndex(index: number, obj: any): any {
    return index;
  }

  firstFormGroup = this._formBuilder.group({
    selection: ['', Validators.required],

  });
  secondFormGroup = this._formBuilder.group({
  });

  public onClick() {
    if (!this.isValidInput()) return;
    let finalDeadline = this.isDeadlineDisabled ? null : this.deadline;
    this.tenderService.create({
      bloodProducts: this.bloodProducts,
      deadline: finalDeadline
    }).subscribe(res => {
      this.router.navigate(['/tenders']);
    });
  }

  onSelect(bloodType: any) {
    if(this.selected.includes(bloodType)) {
      this.selected = this.selected.filter(item => item !== bloodType);
    } else {
      this.selected.push(bloodType);
    }
    this.generateBloodProducts();
  }

  deadlineCheck() {
    this.isDeadlineDisabled = !this.isDeadlineDisabled;
  }

  generateBloodProducts() {
    if(this.bloodProducts.length === 0) {
      this.generateInitialBloodProducts();
    } else {
      for(let bloodType of this.bloodTypes) {
        if(this.containsBloodType(bloodType) && !this.containsBloodTypeInSelected(bloodType)) {
          this.bloodProducts = this.bloodProducts.filter(item => item.bloodType !== bloodType);
        } else if(!this.containsBloodType(bloodType) && this.containsBloodTypeInSelected(bloodType)) {
          this.bloodProducts.push({
            bloodType: bloodType,
            amount: 0
          })
        }
      }
    }
  }

  generateInitialBloodProducts() {
    for(let bloodType of this.selected) {
      this.bloodProducts.push({
        bloodType: bloodType,
        amount: 0
      })
    }
  }

  containsBloodType(bloodType: BloodType) {
    return this.bloodProducts.filter(function(bloodProduct) { return bloodProduct.bloodType === bloodType; }).length > 0
  }
  containsBloodTypeInSelected(bloodType: BloodType) {
    return this.selected.filter(function(type) { return type === bloodType; }).length > 0
  }
  seeBloodProducts() {
    console.log(this.bloodProducts);
  }
  private isValidInput(): boolean {
    return this.tender?.bloodProducts != [];
  }
}
