import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BuildingMapService } from '../../services/building-map.service';
import { BuildingMap } from '../../models/building-map.model';
import { MapsFacade } from '../../maps.facade';
import { Observable, pipe, tap } from "rxjs";
import * as d3 from 'd3';
import { Building } from '../../models/building.model';
@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.css'],
})
export class BuildingsComponent implements OnInit {
  building:Building=new Building;
  map:BuildingMap[]=[];
  constructor(private service:BuildingMapService, private router: Router, private mapsFacade:MapsFacade ) { 
    
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
        .attr("width", d => d.width)
        .attr("height", d => d.height)
        .attr("stroke", "black")
        .attr("id", d=> d.id)
        .attr("name", d=> d.building.name)
        
        //Go to the floors of the building
        .on('mouseover', function(){
          var name = d3.select(this).attr("name");
          console.log(name);
          svg.on('mouseover', function(){
            d3.selectAll('rect')
                    .on('click', function(e, d) {
                      var id = d3.select(this).attr("id");
                     
                      d3.select(this)
                        router.navigate(['/floors',id]) .then(() => {
                          window.location.reload();
                        }); 
                        
                    });
          })
        } )
        

        
  })
  
  }
  
}
