import { Injectable } from '@angular/core';
import * as d3 from 'd3';

@Injectable({
  providedIn: 'root'
})
export class FloorServiceService {

  constructor() { }

  getDataA(){
    var data=[{
      "id" : 2,
      "x" : "0.0",
      "y" : "0.0",
      "w" : "100",
      "h" : "100",
      "color" : "orange",
      "v" : 0

    },
    {
      "id" : 3,
      "x" : "200.0",
      "y" : "200.0",
      "w" : "200",
      "h" : "200",
      "color" : "blue",
      "v" : 1
    },{
      "id" : 4,
      "x" : "300.0",
      "y" : "300.0",
      "w" : "300",
      "h" : "100",
      "color" : "yellow",
      "v" : 0

    }]
    
    return data;
  }

  createSVG(){
    return d3.select("body")
           .append("svg")
           .attr("height", 1000)
           .attr("width", 1000)
  }

  createObjects(svg:any, data1:any, id:any){
    //data1.filter((a:any) => a.parent == id)
    return svg.selectAll("rect")
          .data(data1.filter((a:any) => a.v == id))
          .enter()
          .append("rect")
          .attr("height", function(d:any){ return d.h;})
          .attr("width", function(d:any){ return d.w;})
          .attr("fill", function(d:any){ return d.color;})
          .attr("stroke", "black")
          .attr("x", function(d:any){ return d.x;})
          .attr("y", function(d:any){ return d.y;})
          .attr("id", function(d:any){return d.id})
          
  }
}
