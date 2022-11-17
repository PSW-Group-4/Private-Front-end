import { EditBuildingComponent } from './../../containers/edit-item/edit-building/edit-building.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BuildingMap } from '../../models/building-map.model';
import { MapsFacade } from '../../maps.facade';
import * as d3 from 'd3';

import {MatDialog, MatDialogConfig} from '@angular/material/dialog';

import { Building } from '../../models/building.model';

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.css'],
})
export class BuildingsComponent implements OnInit {
  building:Building=new Building;
  map:BuildingMap[]=[];
  temp : BuildingMap = new BuildingMap();
  public showBuildingDetailComponent = false;
  constructor(private router: Router, private mapsFacade:MapsFacade, public dialog: MatDialog ) { 
  }
  
  
  ngOnInit(): void {
  this.mapsFacade.getBuildingMaps$().subscribe(res=>{
      this.map = res;

      var svg = d3.select("#buildingMap")
      .classed('container', true)
      .append("svg")
      .attr("height", 600)
      .attr("width", 600)

      var router:Router = this.router;
        var buildings = svg.selectAll("g")
        .data(this.map)
        .enter()
        .append("g")
        .on('mouseover', function(){
          svg.on('mouseover', function(){
            d3.selectAll('rect')
                    .on('dblclick', function(e, d) {
                      var id = d3.select(this).attr("id");   
                      d3.select(this)
                        router.navigate([router.url,"building",id])
                        
                    })
          })
        } )
        .on('click', d => this.FooTemp(d.srcElement.__data__));
 
        buildings.append('rect')
        .attr("fill", '#04AA6D')
        .attr("x", d => d.coordinateX)
        .attr("y", d => d.coordinateY)
        .attr("width", d => d.width)
        .attr("height", d => d.height)
        .attr("stroke", "black")
        .attr("id", d=> d.id)
        .attr("name", d=> d.building.name)
        
        buildings.append('text')
        .style("fill", "black")
        .text(function(d) {
          return d.building.name;
        })
        .attr('x', d => d.coordinateX )
        .attr('y', d=> d.coordinateY + d.height+10)

  })

  
  
  
  }

  FooTemp(t : BuildingMap) : void {
    this.showBuildingDetailComponent = true;
    this.temp = t;
  }

  openEditDialog(): void {
    const dialogConf = new MatDialogConfig();

    dialogConf.data = {
      building: this.temp,
    };
    dialogConf.height = "400px";
    dialogConf.width = "600px";

    const dialogRef = this.dialog.open(EditBuildingComponent , dialogConf);
    

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
