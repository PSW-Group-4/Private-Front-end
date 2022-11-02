import { Component, OnInit } from '@angular/core';
import { BuildingServiceService } from '../../services/building-service.service';
import { Router } from '@angular/router';
import { BuildingMapService } from '../../services/building-map.service';
import { BuildingMap } from '../../models/building-map.model';
@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.css'],
  providers: [BuildingServiceService]
})
export class BuildingsComponent implements OnInit {
  mapBuildings : BuildingMap[] = [];
  constructor(private service:BuildingMapService, private router: Router) { }

  ngOnInit(): void {
    this.service.getBuildingMaps().subscribe(res=>{
        this.mapBuildings = res;
        console.log(this.mapBuildings);
    })
    var data = this.service.getDataA();
    var svg = this.service.createSVG();
    var draw = this.service.createObjects(svg, this.mapBuildings);
  }



}
