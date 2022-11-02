import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BuildingMap } from '../models/building-map.model';
import { Router } from '@angular/router';
import * as d3 from 'd3';
import { MapsFacade } from '../maps.facade';

@Injectable({
  providedIn: 'root'
})
export class BuildingMapService {

  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  readonly API = 'api/BuildingMap';

  constructor(private http: HttpClient, private router: Router) {}

  getBuildingMaps(): Observable<BuildingMap[]> {
    return this.http.get<BuildingMap[]>(this.apiHost + this.API, {headers: this.headers});
  }

  updateBuildingMap(buildingMap: BuildingMap): Observable<any> {
    return this.http.put(`${this.apiHost}${this.API}/${buildingMap.id}`, buildingMap);
  }

  getDataA(){
    var data=[{
      "id" : 0,
      "x" : "0.0",
      "y" : "0.0",
      "w" : "100",
      "h" : "100",
      "color" : "red"
    },
    {
      "id" : 1,
      "x" : "200.0",
      "y" : "200.0",
      "w" : "200",
      "h" : "200",
      "color" : "blue"
    }]
    return data;
  }
  createSVG(){
    return d3.select("body")
           .append("svg")
           .attr("height", 1000)
           .attr("width", 1000)
  }

  createObjects(svg:any, data1:any){
    
    return svg.selectAll("rect")
            .data(data1)
            .enter()
            .append("rect")
            .attr("height", function(d:any){ return 100;})
            .attr("width", function(d:any){ return 100;})
            .attr("fill", function(d:any){ return "red";})
            .attr("stroke", "black")
            .attr("x", function(d:any){ return 0;})
            .attr("y", function(d:any){ return 0;})
            .attr("id", function(d:any){return 'a';})
            .on('click',this.onClickk(svg) )
          
          
  }
  onClickk(svg:any){
    var router:Router = this.router;
    svg.on('mouseover', function(){
      d3.selectAll('rect')
              .on('click', function(e, d) {
                var id = d3.select(this).attr("id");
                d3.select(this)
                  
                  
                  .style('fill', 'black');
                  //prelazak na dete
                  router.navigate(['/floors',id]) .then(() => {
                    window.location.reload();
                  });
                  
              });
    })
    
  }
}
