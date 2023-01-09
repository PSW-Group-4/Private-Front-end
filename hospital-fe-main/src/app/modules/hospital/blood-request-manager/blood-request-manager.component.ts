import { Component, OnInit, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { BloodBankService } from 'src/app/modules/hospital/services/blood-bank.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EMPTY, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BloodRequestManagerService } from '../services/blood-request-manager.service';
import { BloodRequestManager } from '../model/blood-request-manager.model';


export interface DialogData {
  quantity: number;
  bloodType: string;
  name: string;
}

@Component({
  selector: 'blood-request-manager',
  templateUrl: './blood-request-manager.component.html',
  styleUrls: ['./blood-request-manager.component.css']
})
export class BloodRequestManagerComponent implements OnInit {

  public dataSource = new MatTableDataSource<BloodRequestManager>();
  public displayedColumns = ['Blood Bank', 'Manager', 'Amount', 'Blood type', 'Date'];
  public managerRequests: BloodRequestManager[] = [];
  quantity: number = 0;
  bloodType: string = "";
  name: string = "";
  deliveryDay: number = 0;
  Announcementform: FormGroup = new FormGroup('');
  minDate: Date = new Date();
  constructor(private bloodRequestManagerService: BloodRequestManagerService, private router: Router, private modalService: NgbModal, public dialog: MatDialog, private _formBuilder: FormBuilder) { }

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  ngOnInit(): void {
    this.bloodRequestManagerService.getBloodRequestsManager().subscribe(res => {
      this.managerRequests = res//.map((bloodSubscribe) => new BloodRequestManager(bloodSubscribe));
      console.log(res)
      this.managerRequests.forEach(obj => obj.date = new Date(2022, Math.floor(Math.random() * 12)+1, Math.floor(Math.random() * 28)+1));
      this.dataSource.data = this.managerRequests;
      console.log(this.managerRequests)
    })
    
    this.Announcementform = this._formBuilder.group({

      PublishedFrom: ['', Validators.required],
      PublishedTo: ['', Validators.required],

    });

    this.Announcementform.valueChanges.subscribe(res => {
      this.minDate = new Date(res.PublishedFrom);
    });
  }

 
  applyDateFilter(start?:Date | null, end?:Date | null) {
    if (start != undefined && end != undefined){
      this.dataSource.data = this.managerRequests;
      this.dataSource.data = this.dataSource.data.filter(e=> e.date >= start && e.date <= end);
    }else{
      this.dataSource.data = this.managerRequests;
    }
    }

public addBloodSubscribe() {
  this.openDialog();
}

openDialog(): void {
  const dialogRef = this.dialog.open(AddManagerRequestDialog, {
    width: '250px',
    data: { bloodType: this.bloodType, quantity: this.quantity, name: this.name },
  })
    dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.bloodRequestManagerService.getBloodRequestsManager().subscribe(res => {
        this.managerRequests = res;
        this.dataSource.data = this.managerRequests;
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
export class AddManagerRequestDialog {
  myControl = new FormControl('');
  public location: string = '';
  public managerRequests: BloodRequestManager[] = [];
  filteredOptions: Observable<string[]> = EMPTY;
  options: string[] = ['0-', '0+', 'A-', 'A+', 'B-', 'B+', 'AB-', 'AB+'];
  haveSupply: boolean = false;
  firstTime: boolean = true;
  public bloodBanks: any[] = [];
  public request: BloodRequestManager = new BloodRequestManager();
  constructor(
    private bloodBankService: BloodBankService,
    private bloodRequestManagerService: BloodRequestManagerService,
    public dialogRef: MatDialogRef<AddManagerRequestDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }
  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
    this.bloodBankService.getBloodBanksWhole().subscribe(res => {
      this.bloodBanks = res;
    })
    this.bloodRequestManagerService.getBloodRequestsManager().subscribe(res => {
      this.managerRequests = res.map((bloodSubscribe) => new BloodRequestManager(bloodSubscribe));
    })
  }

  onNoClick(): void {
    this.dialogRef.close(this.data);
  }


  onCheckClick(quantity: number, bloodType: string, bank: string): void {
    console.log(quantity, bloodType, bank)
    this.request.amount = quantity;
    for (let bb of this.bloodBanks) {
      if (bb.name === bank) {
        this.request.bloodBankId = bb.id;
      }
    }
    this.request.managerId = "e6fbebce-dd69-45e4-9e38-c66b98cc8197";
    switch (bloodType.charAt(1)) {
      case "+":
        bloodType.replace("+", " POSITIVE");
        break;
      default:
        bloodType.replace("-", " NEGATIVE");
    }
    this.request.bloodType = bloodType;
    this.bloodRequestManagerService.addBloodRequestManager(this.request).subscribe()
    this.dialogRef.close(this.data);
  }

  public form: FormGroup = new FormGroup({
    bloodType: new FormControl(''),
    quantity: new FormControl(''),
    name: new FormControl(''),
  });

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}

