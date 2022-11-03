import { Room } from './../../models/room.model';
import { RoomService } from 'src/app/modules/hospital/services/room.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RoomMap } from '../../models/room-map.model';
import { RoomMapService } from '../../services/room-map.service';
import * as d3 from 'd3';
import { MapsFacade } from '../../maps.facade';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import { EditItemComponent } from '../../containers/edit-item/edit-item.component';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  map$:RoomMap[]=[];
  id:string='';
  temp: RoomMap = new RoomMap();
  public showRoomDetailComponent = false;

  constructor(private service:RoomMapService,  private route: ActivatedRoute, private router: Router, private mapsFacade:MapsFacade, public dialog: MatDialog) { }

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
        .attr("x", d => d.coordinateX)
        .attr("y", d => d.coordinateY)
        .attr("width", d => d.width)
        .attr("height", d => d.height)
        .attr("stroke", "black")
        .attr("id", d=> d.id)
        //Go to the floors of the building
        .on('mouseover', function(){
          svg.on('mouseover', function(){
            d3.selectAll('rect')
                    .on('dblclick', function(e, d) {
                      var id = d3.select(this).attr("id");
                      d3.select(this)
                        
                        });
                        
                    });
          })
          .on('click', d => this.FooTemp(d.srcElement.__data__),

          );
        } )
        
  }

  

  FooTemp(t : RoomMap) : void {
    this.showRoomDetailComponent = true;
    this.temp = t;
  }

  openEditDialog(): void {
    const dialogConf = new MatDialogConfig();

    dialogConf.data = {
      room: this.temp,
    };
    dialogConf.height = "400px";
    dialogConf.width = "600px";

    const dialogRef = this.dialog.open(EditItemComponent , dialogConf);
    

    dialogRef.afterClosed().subscribe(result => {
    });
  }


}
