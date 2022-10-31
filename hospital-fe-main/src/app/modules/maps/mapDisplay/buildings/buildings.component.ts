import { Component, OnInit } from '@angular/core';
import { BuildingServiceService } from '../../services/building-service.service';
import { Router } from '@angular/router';
import { devOnlyGuardedExpression } from '@angular/compiler';
import * as d3 from 'd3';
@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.css'],
  providers: [BuildingServiceService]
})
export class BuildingsComponent implements OnInit {
  
  constructor(private service:BuildingServiceService, private router: Router) { }

  ngOnInit(): void {
    var data = this.service.getDataA();
    var svg = this.service.createSVG();
    var draw = this.service.createObjects(svg, data);
    //this.router.navigate(['/floors'])
    
  //this.service.createObjects(svg, data).click(this.router.navigate(['/floors']));
  

  }



}
