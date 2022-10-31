import { Injectable } from '@angular/core';
import * as d3 from 'd3';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BuildingServiceService {
 
  constructor(public router: Router) { }

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
            .attr("height", function(d:any){ return d.h;})
            .attr("width", function(d:any){ return d.w;})
            .attr("fill", function(d:any){ return d.color;})
            .attr("stroke", "black")
            .attr("x", function(d:any){ return d.x;})
            .attr("y", function(d:any){ return d.y;})
            .attr("id", function(d:any){return d.id})
            .on('click',this.onClickk(svg) )
          
          
  }
  onClickk(svg:any){
    var router:Router = this.router;
    svg.on('mouseover', function(){
      d3.selectAll('rect')
              .on('click', function(e, d) {
                var id = d3.select(this).attr("id");
                d3.select(this)
                  //prelazak na dete
                  
                  .style('fill', 'black');
                  
                  router.navigate(['/floors',id]) .then(() => {
                    window.location.reload();
                  });
                  
              });
    })
    //this.router.navigate(['/floors']);
    
  }
}
