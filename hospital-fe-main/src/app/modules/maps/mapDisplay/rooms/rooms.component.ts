import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RoomMap } from '../../models/room-map.model';
import { RoomMapService } from '../../services/room-map.service';
import * as d3 from 'd3';
import { MapsFacade } from '../../maps.facade';
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  map$:RoomMap[]=[];
  id:string='';
  constructor(private service:RoomMapService,  private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    }); 

    this.service.getRoomMapsByFloorMapId(this.id).subscribe(res=>{
      this.map$ = res;
      console.log('mapa', this.map$);

      var svg = d3.select("#roomMap")
      .classed('container', true)
      .append("svg")
      .attr("height", 600)
      .attr("width", 600)

      var router:Router = this.router;
        var buildings = svg.selectAll("g")
        .data(this.map$)
        .enter()
        .append("g")

        
        buildings.append('rect')
        .attr("fill", '#04AA6D')
        .attr("x", d => d.coordinateX+100)
        .attr("y", d => d.coordinateY+100)
        .attr("width", d => d.width)
        .attr("height", d => d.height)
        .attr("stroke", "black")
        .attr("id", d=> d.id)
        //Go to the floors of the building
        .on('mouseover', function(){
          svg.on('mouseover', function(){
            d3.selectAll('rect')
                    .on('click', function(e, d) {
                      var id = d3.select(this).attr("id");
                      d3.select(this)
                        
                        });
                        
                    });
          })
        } )

  }

}
