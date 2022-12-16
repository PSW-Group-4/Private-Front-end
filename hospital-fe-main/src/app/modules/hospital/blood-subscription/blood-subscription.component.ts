import { Component, OnInit, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { BloodBankService } from 'src/app/modules/hospital/services/blood-bank.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';
import { EMPTY, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { BloodSubscribeService } from '../services/blood-subscribe.service';
import { BloodSubscribe } from '../model/blood-subscribe.model';
import { BloodBank } from 'src/app/modules/hospital/model/blood-bank.model';
import { BloodProduct } from '../model/blood-product.model';
import { BloodType } from '../model/blood-type.model';
import { BloodSubscribeDTO } from '../model/blood-subscriptionDTO.model';

export interface DialogData {
  quantity: number;
  bloodType: string;
  name: string;
  deliveryDay: number;
  urgent:boolean;
  activeStatus: boolean;
}

@Component({
  selector: 'blood-subscription',
  templateUrl: './blood-subscription.component.html',
  styleUrls: ['./blood-subscription.component.css']
})
export class BloodBanksSubComponent implements OnInit {
  public dataSource = new MatTableDataSource<BloodSubscribe>();
  public displayedColumns = ['Blood Bank', 'Blood', 'Amount', 'Delivery day of the month'];
  public bloodSubscribes: BloodSubscribe[] = [];
  quantity: number = 0;
  bloodType: string = "";
  name: string = "";
  deliveryDay: number = 0;
  urgent:boolean = false;
  activeStatus: boolean = false;

  constructor(private bloodSubscribeService: BloodSubscribeService, private router: Router, private modalService: NgbModal, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.bloodSubscribeService.getBloodSubscribes().subscribe(res => {
      this.bloodSubscribes = res.map((bloodSubscribe) => new BloodSubscribe(bloodSubscribe));
      this.dataSource.data = this.bloodSubscribes;
    })
  }
  public addBloodSubscribe() {
    this.openDialog()
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddSubscriptionDialog, {
      width: '250px',
      data: {bloodType: this.bloodType, quantity: this.quantity, name: this.name, deliveryDay: this.deliveryDay, urgent: this.urgent, activeStatus: this.activeStatus},
    })
    dialogRef.afterClosed().subscribe(result => { 
      if(result){
        this.bloodSubscribeService.getBloodSubscribes().subscribe(res => {
          this.bloodSubscribes = res.map((bloodSubscribe) => new BloodSubscribe(bloodSubscribe));
          this.dataSource.data = this.bloodSubscribes;
        })
      }
    });
  }

}

@Component({
  selector: 'check-blood-supplies-dialog',
  templateUrl: 'check-blood-supplies-dialog.html',
  styleUrls: ['./check-blood-supplies-dialog.css']
})
export class AddSubscriptionDialog {
  myControl = new FormControl('');
  public location: string = '';
  public bloodSubscribes: BloodSubscribe[] = [];
  filteredOptions: Observable<string[]> = EMPTY;
  options: string[] = ['0-', '0+', 'A-', 'A+', 'B-', 'B+', 'AB-', 'AB+'];
  haveSupply: boolean = false;
  firstTime: boolean = true;
  public bloodBanks: BloodBank[] = [];
  public suscription : BloodSubscribeDTO = new BloodSubscribeDTO();
  constructor(
    private bloodBankService: BloodBankService,
    private bloodSubService: BloodSubscribeService,
    public dialogRef: MatDialogRef<AddSubscriptionDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}
  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
    this.bloodBankService.getBloodBanks().subscribe(res => {
      this.bloodBanks = res;
    })
    this.bloodSubService.getBloodSubscribes().subscribe(res => {
      this.bloodSubscribes = res.map((bloodSubscribe) => new BloodSubscribe(bloodSubscribe));
    })
  }

  onNoClick(): void {
    this.dialogRef.close(this.data);
  }


  onCheckClick(quantity: number, bloodType: string, bank: string, urgent: boolean, activeStatus: boolean, day: number): void {
    console.log(quantity, bloodType, bank, urgent, activeStatus, day)
    let blood: BloodProduct[] | undefined = [];
    for (let sub of this.bloodSubscribes) {
      if (sub.bloodBankName === bank){
          // blood = sub.blood?.map((one)=> ({...one, bloodType: {
          //   rhFactor: `${one.bloodType?.rhFactor}`,
          //   bloodGroup: `${one.bloodType?.bloodGroup}`
          // }}));
      }
    }
    this.suscription.bloodBank = bank;
    this.suscription.urgent = urgent;
    this.suscription.activeStatus = activeStatus;
    let one: BloodProduct = new BloodProduct();
    let bt: BloodType = new BloodType();
    switch(bloodType.charAt(0)) {
        case "0":
          bt.bloodGroup = "0";
          break;
        case "A":
          bt.bloodGroup = "1";
          break;
        case "B":
          bt.bloodGroup = "2";
          break;
        default:
          bt.bloodGroup = "3";
      } 
      switch(bloodType.charAt(1)) {
          case "+":
            bt.rhFactor = "0";
            break;
          default:
            bt.rhFactor = "1";
        } 
    one.amount = quantity;
    one.bloodType = bt;
    blood?.push(one);
    this.suscription.blood = blood;
    this.bloodSubService.update(this.suscription).subscribe()
    this.dialogRef.close(this.data);
  }

  public form: FormGroup = new FormGroup({
    bloodType: new FormControl(''),
    quantity: new FormControl(''),
    name: new FormControl(''),
    deliveryDay: new FormControl(''),
    urgent: new FormControl(''),
    activeStatus: new FormControl(''),
  });

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}

