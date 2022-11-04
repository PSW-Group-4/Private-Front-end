import { Injectable } from '@angular/core';
import * as d3 from 'd3';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor() { }

  getDataA(){
    var data=[{
      "x" : "0.0",
      "y" : "0.0",
      "w" : "100",
      "h" : "100",
      "color" : "red"
    },
    {
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
            .on('mouseover',function() {
              d3.selectAll('rect')
              .on('click', function(e, d) {
                d3.select(this)
                  //prikaz info
                  .style('fill', 'black');
              });
          })
          
  }
}
