import { Component, OnInit } from '@angular/core';
import { BuildingServiceService } from '../../services/building-service.service';
import { Router } from '@angular/router';
import { BuildingMapService } from '../../services/building-map.service';
@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.css'],
  providers: [BuildingServiceService]
})
export class BuildingsComponent implements OnInit {
  constructor(private service:BuildingMapService, private router: Router) { }

  ngOnInit(): void {
    var data = this.service.getDataA();
    var svg = this.service.createSVG();
    var draw = this.service.createObjects(svg, data);
  }



}
