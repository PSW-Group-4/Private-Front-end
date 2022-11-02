import { Component, OnInit } from '@angular/core';
import { BuildingServiceService } from '../../services/building-service.service';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { EditItemComponent } from '../../containers/edit-item/edit-item.component'; 


@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.css'],
  providers: [BuildingServiceService]
})
export class BuildingsComponent implements OnInit {
  constructor(private service:BuildingServiceService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    var data = this.service.getDataA();
    var svg = this.service.createSVG();
    var draw = this.service.createObjects(svg, data);
  }


  openAddDialog(): void {
    const dialogRef = this.dialog.open(EditItemComponent, {
      data: {isAdd: true},
      height: '400px',
      width: '600px',
      //data: {name: this.name, animal: this.animal},
    });

  }

  
}
