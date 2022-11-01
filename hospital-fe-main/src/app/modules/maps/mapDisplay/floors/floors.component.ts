import { Component, OnInit } from '@angular/core';
import { FloorServiceService } from '../../services/floor-service.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-floors',
  templateUrl: './floors.component.html',
  styleUrls: ['./floors.component.css']
})
export class FloorsComponent implements OnInit {

  constructor(private service: FloorServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    var id;
    this.route.params.subscribe((params: Params) => {
      id = params['id'];
    }); 
    console.log ("id ", id );
    var data = this.service.getDataA();
    var svg = this.service.createSVG();
    var draw = this.service.createObjects(svg, data, id);
  }

}