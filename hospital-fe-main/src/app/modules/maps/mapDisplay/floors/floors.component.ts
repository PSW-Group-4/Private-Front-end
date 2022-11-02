import { Component, OnInit } from '@angular/core';
import { FloorServiceService } from '../../services/floor-service.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FloorMapService } from '../../services/floor-map.service';
import { FloorMap } from '../../models/floor-map.model';
import * as d3 from 'd3';
import { BuildingMap } from '../../models/building-map.model';
import { BuildingMapService } from '../../services/building-map.service';
import { MapsFacade } from '../../maps.facade';
import { Observable, pipe, tap } from "rxjs";
@Component({
  selector: 'app-floors',
  templateUrl: './floors.component.html',
  styleUrls: ['./floors.component.css']
})
export class FloorsComponent implements OnInit {
  map:FloorMap[]=[];
  id:string ='';
  building:BuildingMap=new BuildingMap();
  constructor(private service: FloorMapService, private route: ActivatedRoute, private router:Router, private mapsFacade:MapsFacade) { 
    
  }

  ngOnInit(): void {
    this.mapsFacade.loadBuildingMaps();
    this.mapsFacade.loadFloorMaps();
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    }); 

    console.log ("id ", this.id );
    
    //var data = this.mapsFacade.getFloorsByBuilding(this.id);
    
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

        
  }
  
  
   
    
  }

