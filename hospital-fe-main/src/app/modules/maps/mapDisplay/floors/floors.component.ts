import { EditFloorComponent } from './../../containers/edit-item/edit-floor/edit-floor.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FloorMap } from '../../models/floor-map.model';
import * as d3 from 'd3';
import { BuildingMap } from '../../models/building-map.model';
import { MapsFacade } from '../../maps.facade';

import {MatDialog, MatDialogConfig} from '@angular/material/dialog';

import { Floor } from '../../models/floor.model';

@Component({
  selector: 'app-floors',
  templateUrl: './floors.component.html',
  styleUrls: ['./floors.component.css']
})
export class FloorsComponent implements OnInit {
  floor:Floor = new Floor;
  map$:FloorMap[]=[];
  id:string ='';
  temp : FloorMap = new FloorMap();
  building:BuildingMap=new BuildingMap();
  public showFloorDetailComponent = false;
  constructor(private route: ActivatedRoute, private router:Router, private mapsFacade:MapsFacade, public dialog: MatDialog) { 
      
  }

  ngOnInit(): void {
    
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    }); 


    this.mapsFacade.getFloorMapsByBuildingMapId$(this.id).subscribe(res=>{
      this.map$ = res;

      if (d3.select("#maps") != null) {
        d3.select("#maps").remove()
      } 


      var svg = d3.select("#floorMap")
      .classed('container', true)
      .append("svg")
      .attr("id", "maps")
      .attr("height", 600)
      .attr("width", 600)

      var router:Router = this.router;

      var floors = svg.selectAll("g")
      .data(this.map$)
      .enter()
      .append("g")
      .on('mouseover', function(){
        svg.on('mouseover', function(){
          d3.selectAll('rect')
                  .on('dblclick', function(e, d) {
                    var id = d3.select(this).attr("id");
                    d3.select(this)
                      router.navigate(['/room-maps',id]) .then(() => {
                        window.location.reload();
                      });
                      
                  });
        })
      } )
      .on('click', d => this.FooTemp(d.srcElement.__data__));

      floors.append('rect')
      .attr("fill", '#61B1DC')
      .attr("x", d => d.coordinateX+100)
      .attr("y", d => d.coordinateY+100)
      .attr("width", d => d.width)
      .attr("height", d => d.height)
      .attr("stroke", "black")
      .attr("id", d=> d.id)
      
      floors.append('text')
      .style("fill", "black")
      .text(function(d) {
        return d.floor.name;
      })
      .attr('x', d => d.coordinateX+100 )
      .attr('y', d=> d.coordinateY+100 + d.height/2)
    })
  }

  FooTemp(t : FloorMap) : void {
    this.showFloorDetailComponent = true;
    this.temp = t;
  }

  openEditDialog(): void {
    const dialogConf = new MatDialogConfig();

    dialogConf.data = {
      floor: this.temp,
    };
    dialogConf.height = "400px";
    dialogConf.width = "600px";

    const dialogRef = this.dialog.open(EditFloorComponent , dialogConf);
    

    dialogRef.afterClosed().subscribe(result => {
    });
  }
    
}

