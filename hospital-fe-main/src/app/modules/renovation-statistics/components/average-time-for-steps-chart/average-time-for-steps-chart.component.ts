import { Component, Input, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-average-time-for-steps-chart',
  templateUrl: './average-time-for-steps-chart.component.html',
  styleUrls: ['./average-time-for-steps-chart.component.css']
})
export class AverageTimeForStepsChartComponent implements OnInit {

  @Input() importData : Observable<number[]> = new Observable<number[]>;
  clearData : number[] = []
   
  constructor() { }

  ngOnInit(): void {
    this.importData.subscribe({
      next : (v) => {
        this.clearData = v;

        const colors = [
          "#ED1D25",
          "#0056A8",
          "#5BC035",
          "#6B2E68",
          "#F3B219",
          "#FA5000",
          "#C50048",
          "#029626",
          "#A3C940",
          "#0DDEC5",
          "#FFF203",
          "#FFDB1B",
          "#E61C13",
          "#73B1E6",
          "#BECD48",
          "#017252"
        ];

      var keys : string[] = ["On Choose Type",
            "On Old Rooms Selection",
            "On Timeframe Creation",
            "On Choose Specific Time",
            "On New Rooms Creation"
            ] 
        
        var margin = {top: 20, right: 20, bottom: 30, left: 40},
      width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

      // set the ranges
      var x = d3.scaleBand()
                .range([0, width])
                .padding(0.1);
      var y = d3.scaleLinear()
                .range([height, 0]);
                
      // append the svg object to the body of the page
      // append a 'group' element to 'svg'
      // moves the 'group' element to the top left margin
      d3.select("#my_dataviz2").selectChildren().remove();

      var svg = d3.select("#my_dataviz2").append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
        .append("g")
          .attr("transform", 
                "translate(" + margin.left + "," + margin.top + ")");

      // get the data
      // format the data

      // Scale the range of the data in the domains
      x.domain(keys.map(function(d) { return d; }));
      y.domain([0, this.clearData.reduce(
        (max, item) => (item > max ? item : max),
        0
      )]);

      // append the rectangles for the bar chart
      svg.selectAll(".bar")
          .data(this.clearData)
        .enter().append("rect")
          .attr("class", "bar")
          .attr("x", (d,i) =>  68 + i * 177 )
          .attr("width", 50)
          .attr("y", function(d) { return y(d); })
          .attr("height", function(d) { return height - y(d); })
          .attr("fill", (d, i) => colors[i]);

      // add the x Axis
      svg.append("g")
          .attr("transform", "translate(0," + height + ")")
          .call(d3.axisBottom(x));

      // add the y Axis
      svg.append("g")
          .call(d3.axisLeft(y));
        
      }})
  }
}
