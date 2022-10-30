import { Component, OnInit, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Router } from '@angular/router';
import { BloodBank } from 'src/app/modules/hospital/model/blood-bank.model';
import { BloodBankService } from 'src/app/modules/hospital/services/blood-bank.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EMPTY, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  quantity: number;
  bloodType: string;
}

@Component({
  selector: 'app-blood-banks',
  templateUrl: './blood-banks.component.html',
  styleUrls: ['./blood-banks.component.css']
})
export class BloodBanksComponent implements OnInit {
  public dataSource = new MatTableDataSource<BloodBank>();
  public displayedColumns = ['Name', 'Server Address', 'Email Address', 'Blood supplies'];
  public bloodBanks: BloodBank[] = [];
  quantity: number = 0;
  bloodType: string = "";

  constructor(private bloodBankService: BloodBankService, private router: Router, private modalService: NgbModal, public dialog: MatDialog) { }
  
  ngOnInit(): void {
    this.bloodBankService.getBloodBanks().subscribe(res => {
    this.bloodBanks = res;
    this.dataSource.data = this.bloodBanks;
    })
  }
  public addBloodBank() {
    this.router.navigate(['/bloodBanks/add']);
  }
  
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {bloodType: this.bloodType, quantity: this.quantity},
    });

    dialogRef.componentInstance.location = 'http://localhost:4200';

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result){
        [this.quantity, this.bloodType] = result;
        console.log(this.quantity, this.bloodType);
      }
      [this.quantity, this.bloodType] = [0, ''];
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {
  myControl = new FormControl('');
  public location: string = '';
  filteredOptions: Observable<string[]> = EMPTY;
  options: string[] = ['0-', '0+', 'A-', 'A+', 'B-', 'B+', 'AB-', 'AB+'];
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}
  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
      console.log(this.location);
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

  public form: FormGroup = new FormGroup({
    bloodType: new FormControl(''),
    quantity: new FormControl(''),
  });

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
