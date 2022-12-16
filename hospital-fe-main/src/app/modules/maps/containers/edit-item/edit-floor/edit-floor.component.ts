import { FloorMapService } from './../../../services/floor-map.service';
import { FloorMap } from './../../../models/floor-map.model';
import { Component, Inject, Input, OnInit, Output } from '@angular/core';
import { Floor } from '../../../models/floor.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-floor',
  templateUrl: './edit-floor.component.html',
  styleUrls: ['./edit-floor.component.css']
})
export class EditFloorComponent implements OnInit {

  @Input() floor: FloorMap;
  @Output() floorOutput = new Floor;

  constructor(private route: ActivatedRoute, private router: Router,
    private floorService: FloorMapService,
    private dialogRef: MatDialogRef<EditFloorComponent>,
    @Inject(MAT_DIALOG_DATA) data : any) {
      this.floor = data.floor
      this.floorOutput = data.floor
   }

  ngOnInit(): void {
  }

  public updateFloor(): void {
    this.floorService.updateFloor(this.floorOutput).subscribe(res => {
    });
    window.location.reload();
  }

}
