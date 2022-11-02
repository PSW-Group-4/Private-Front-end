import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BuildingMapService } from '../../services/building-map.service';
import { BuildingMap } from '../../models/building-map.model';
import { MapsFacade } from '../../maps.facade';
import { Observable, pipe, tap } from "rxjs";
import * as d3 from 'd3';
@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.css'],
})
export class BuildingsComponent implements OnInit {

  map:BuildingMap[]=[];
  constructor(private service:BuildingMapService, private router: Router, private mapsFacade:MapsFacade ) { 
    
  }
  
  ngOnInit(): void {
   
  this.service.getBuildingMaps().subscribe(res=>{
      this.map = res;
      console.log('mapa', this.map);

      var svg = d3.select("body")
      .append("svg")
      .attr("height", 1000)
      .attr("width", 1000)

      var router:Router = this.router;
        var buildings = svg.selectAll("rect")
        .data(this.map)
        .enter()
        .append("rect")
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
