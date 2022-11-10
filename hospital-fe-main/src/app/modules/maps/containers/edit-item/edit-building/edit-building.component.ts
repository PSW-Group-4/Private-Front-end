import { Building } from '../../../models/building.model';
import { BuildingMapService } from '../../../services/building-map.service';
import { Component, Inject, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BuildingMap } from '../../../models/building-map.model';

@Component({
  selector: 'app-edit-building',
  templateUrl: './edit-building.component.html',
  styleUrls: ['./edit-building.component.css']
})
export class EditBuildingComponent implements OnInit {

  @Input() building: BuildingMap;
  @Output() buildingOutput = new Building;

  constructor(private route: ActivatedRoute, private router: Router,
    private buildingService: BuildingMapService,
    private dialogRef: MatDialogRef<EditBuildingComponent>,
    @Inject(MAT_DIALOG_DATA) data : any) {
    this.building = data.building
    this.buildingOutput = data.building
   }

  ngOnInit(): void {
  }

  public updateBuilding(): void {
    this.buildingService.updateBuilding(this.buildingOutput).subscribe(res => {
    });
  }

  

}
