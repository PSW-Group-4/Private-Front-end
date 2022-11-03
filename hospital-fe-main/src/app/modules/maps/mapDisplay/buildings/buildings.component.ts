import { EditItemComponent } from './../../containers/edit-item/edit-item.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BuildingMapService } from '../../services/building-map.service';
import { BuildingMap } from '../../models/building-map.model';
import { MapsFacade } from '../../maps.facade';
import { Observable, pipe, tap } from "rxjs";
import * as d3 from 'd3';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.css'],
})
export class BuildingsComponent implements OnInit {

  map:BuildingMap[]=[];
  temp : BuildingMap = new BuildingMap();
  public showBuildingDetailComponent = false;
  constructor(private service:BuildingMapService, private router: Router, private mapsFacade:MapsFacade, public dialog: MatDialog ) { 
    
  }
  
  ngOnInit(): void {
   
  this.service.getBuildingMaps().subscribe(res=>{
      this.map = res;
      console.log('mapa', this.map);

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

        
        buildings.append('rect')
        .attr("fill", '#04AA6D')
        .attr("x", d => d.coordinateX)
        .attr("y", d => d.coordinateY)
        //-500 because width and height in database isn't suitable
        .attr("width", d => d.width-500)
        .attr("height", d => d.height-500)
        .attr("stroke", "black")
        .attr("id", d=> d.id)
        //Go to the floors of the building
        .on('mouseover', function(){
          svg.on('mouseover', function(){
            d3.selectAll('rect')
                    .on('dblclick', function(e, d) {
                      var id = d3.select(this).attr("id");
                      d3.select(this)
                        router.navigate(['/floors',id]) .then(() => {
                          window.location.reload();
                        });
                        
                    })
          })
        } )
        .on('click', d => this.FooTemp(d.srcElement.__data__));

        
  })

  
  
  }

  FooTemp(t : BuildingMap) : void {
    this.showBuildingDetailComponent = true;
    this.temp = t;
  }

  openEditDialog(): void {
    const dialogRef = this.dialog.open(EditItemComponent, {
      data: {isAdd: true},
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
