import { Injectable } from '@angular/core';
import * as d3 from 'd3';
import { treemap } from 'd3';

@Injectable({
  providedIn: 'root'
})
export class RoomServiceService {
  
  format = d3.format(",d");
  width = 1000;
  height = 1000;
  x = d3.scaleLinear().rangeRound([0, this.width]);
  y = d3.scaleLinear().rangeRound([0, this.height]);
 svg = d3.create("svg")
      .attr("viewBox", [0.5, -30.5, this.width, this.height + 30])
      .style("font", "10px sans-serif");
  
  constructor() { 
    }
  name = (d:any) => d.ancestors().reverse().map((d:any) => d.data.name).join("/")
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
  getData(){
    var data =  {
      "name": "flare",
      "h":10,
      "w":10,
      "x": 0.0,
      "y":0.0,
      "color" : "red",
      "children":  [
      {
                    "name": "analytics",
                    "h":10,
                    "w":10,
                    "x": 15.0,
                    "y":5.0,
                    "color" : "white",
                    "children":  [
                                {
                                  "name": "optimization",
                                  "h":10,
                                  "w":10,
                                  "x": 5.0,
                                  "y":20.0,
                                  "color" : "blue",
                                  "children": [{"name": "AspectRatioBanker", 
                                                "h":10,
                                                  "w":10,
                                                  "x": 30.0,
                                                  "y":50.0,
                                                  "color" : "red","value": 7074}]
                                }
                                ]
    },
      {
      "name": "animate",
      "h":10,
      "w":10,
      "x": 20.0,
      "y":9.0,
      "color" : "red",
      "children":  [
                  {"name": "Easing", "h":10,
                  "w":10,
                  "x": 5.0,
                  "y":15.0,
                  "color" : "red","value": 17010},
                  {"name": "FunctionSequence", "h":10,
                  "w":10,
                  "x": 20.0,
                  "y":20.0,
                  "color" : "white","value": 5842},
                  {"name": "ISchedulable", "h":10,
                  "w":10,
                  "x": 40.0,
                  "y":40.0,
                  "color" : "red","value": 1041},
                  {"name": "Parallel", "h":10,
                  "w":10,
                  "x": 50.0,
                  "y":50.0,
                  "color" : "black","value": 5176},
                  {"name": "Pause", "h":10,
                  "w":10,
                  "x": 60.0,
                  "y":60.0,
                  "color" : "red","value": 449},
                  {"name": "Scheduler", "h":10,
                  "w":10,
                  "x": 70.0,
                  "y":70.0,
                  "color" : "blue","value": 5593},
                  {"name": "Sequence", "h":10,
                  "w":10,
                  "x": 80.0,
                  "y":80.0,
                  "color" : "red","value": 5534},
                  {"name": "Transition", "h":10,
                  "w":10,
                  "x": 90.0,
                  "y":90.0,
                  "color" : "orange","value": 9201},
                  {"name": "Transitioner", "h":10,
                  "w":10,
                  "x": 110.0,
                  "y":110.0,
                  "color" : "red","value": 19975},
                  {"name": "TransitionEvent", "h":10,
                  "w":10,
                  "x": 120.0,
                  "y":120.0,
                  "color" : "green","value": 1116},
                  {"name": "Tween", "h":10,
                  "w":10,
                  "x": 130.0,
                  "y":140.0,
                  "color" : "red","value": 6006}
                ]
    },
       {
      "name": "data","h":10,
      "w":10,
      "x": 10.0,
      "y":10.0,
      "color" : "red",
      "children":  [
      {"name": "DataField", "h":10,
      "w":10,
      "x": 20.0,
      "y":20.0,
      "color" : "white","value": 1759},
      {"name": "DataSchema", "h":10,
      "w":10,
      "x": 30.0,
      "y":30.0,
      "color" : "blue","value": 2165},
      {"name": "DataSet", "h":10,
      "w":10,
      "x": 40.0,
      "y":40.0,
      "color" : "red","value": 586},
      {"name": "DataSource", "h":10,
      "w":10,
      "x": 50.0,
      "y":50.0,
      "color" : "black","value": 3331},
      {"name": "DataTable", "h":10,
      "w":10,
      "x": 60.0,
      "y":60.0,
      "color" : "red","value": 772},
      {"name": "DataUtil", "h":10,
      "w":10,
      "x": 70.0,
      "y":70.0,
      "color" : "blue","value": 3322}
      ]
       }
    ]
    }
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

  }

  getTreemap(){
    var treemap = d3.treemap()
    .size([1000, 1000])
    .padding(2);

  }
  getTrreemap(data1:any){
    var treemap = d3.treemap()
    .tile(this.tile)
  (d3.hierarchy(data1)
    .sum(d => d.value)
    //izmeniti mozda height u value
    .sort((a, b) => b.height - a.height))
  }
  getNodes(){
    var treemap=this.getTreemap;
  
  }

  gettile(node:any, x0:number, y0:number, x1:number, y1:number) {
    d3.treemapBinary(node, 0, 0, 1000, 1000);
    for (const child of node.children) {
      child.x0 = x0 + child.x0 / 1000 * (x1 - x0);
      child.x1 = x0 + child.x1 / 1000 * (x1 - x0);
      child.y0 = y0 + child.y0 / 1000 * (y1 - y0);
      child.y1 = y0 + child.y1 / 1000 * (y1 - y0);
    }
  }

   children(d:any) {
    return d.children;
  }




tile(node:any, x0:number, y0:number, x1:number, y1:number) {
  d3.treemapBinary(node, 0, 0, 1000, 1000);
  for (const child of node.children) {
    child.x0 = x0 + child.x0 / 1000 * (x1 - x0);
    child.x1 = x0 + child.x1 / 1000 * (x1 - x0);
    child.y0 = y0 + child.y0 / 1000 * (y1 - y0);
    child.y1 = y0 + child.y1 / 1000 * (y1 - y0);
  }

  
}
treemap = (data:any) => d3.treemap()
    .tile(this.tile)
  (d3.hierarchy(data)
    .sum(d => d.value)
    .sort((a, b) => b.height - a.height))
    
chart(){
  return this.svg.node();
  
}

render(group:any, root:any){
  const node = group
      .selectAll("g")
      //.data(root.children.concat(root))
      .join("g");

    node.filter((d:any) => d === root ? d.parent : d.children)
        .attr("cursor", "pointer")
        .on("click", (event:any, d:any) => d === root ? this.zoomout(root) : this.zoomin(d));

    node.append("title")
        .text((d:any) => `${this.name(d)}\n${this.format(d.value)}`);

    node.append("rect")
        //.attr("id", (d:any) => (d.leafUid = DOM.uid("leaf")).id)
        .attr("fill", (d:any) => d === root ? "#fff" : d.children ? "#ccc" : "#ddd")
        .attr("stroke", "#fff");

    node.append("clipPath")
        //.attr("id", (d:any) => (d.clipUid = DOM.uid("clip")).id)
      .append("use")
        .attr("xlink:href", (d:any) => d.leafUid.href);

    node.append("text")
        .attr("clip-path", (d:any) => d.clipUid)
        .attr("font-weight", (d:any) => d === root ? "bold" : null)
      .selectAll("tspan")
      .data((d:any) => (d === root ? this.name(d) : d.data.name).split(/(?=[A-Z][^A-Z])/g).concat(this.format(d.value)))
      .join("tspan")
        .attr("x", 3)
        //.attr("y", (d:any, i:any, nodes:any) => `${(i === nodes.length - 1) * 0.3 + 1.1 + i * 0.9}em`)
        .attr("fill-opacity", (d:any, i:any, nodes:any) => i === nodes.length - 1 ? 0.7 : null)
        .attr("font-weight", (d:any, i:any, nodes:any) => i === nodes.length - 1 ? "normal" : null)
        .text((d:any) => d);

    group.call(this.position(group, root), root);
}

position(group:any, root:any) {
  group.selectAll("g")
      .attr("transform", (d:any) => d === root ? `translate(0,-30)` : `translate(${this.x(d.x0)},${this.y(d.y0)})`)
    .select("rect")
      .attr("width", (d:any) => d === root ? this.width : this.x(d.x1) - this.x(d.x0))
      .attr("height", (d:any) => d === root ? 30 : this.y(d.y1) - this.y(d.y0));
}
group = this.svg.append("g")
      .call(this.render, this.treemap(this.getData));
      
zoomin(d:any) {
  const group0 = this.group.attr("pointer-events", "none");
  const group1 = this.group = this.svg.append("g").call(this.render, d);

  this.x.domain([d.x0, d.x1]);
  this.y.domain([d.y0, d.y1]);

  this.svg.transition()
      .duration(750)
      .call((t:any) => group0.transition(t).remove()
        .call(this.position, d.parent))
      //.call(t => group1.transition(t)
        // .attrTween("opacity", () => d3.interpolate(0, 1))
        // .call(position, d));
}

zoomout(d:any) {
  const group0 = this.group.attr("pointer-events", "none");
  const group1 = this.group = this.svg.insert("g", "*").call(this.render, d.parent);

  this.x.domain([d.parent.x0, d.parent.x1]);
  this.y.domain([d.parent.y0, d.parent.y1]);

  this.svg.transition()
      .duration(750)
     // .call((t:any) => group0.transition(t).remove()
       // .attrTween("opacity", () => d3.interpolate(1, 0))
        //.call(this.position, d))
      .call((t:any)=> group1.transition(t)
        .call(this.position, d.parent));
}
}
