import { Component, OnInit } from '@angular/core';
import { RoomServiceService } from '../../services/room-service.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [RoomServiceService]
})
export class MapComponent implements OnInit {

  constructor(private service:RoomServiceService,) { }

  ngOnInit(): void {
     var data = this.service.getDataA();
     var svg = this.service.createSVG();
     var draw = this.service.createObjects(svg, data);
     //var a = this.service.chart();
  }

}
