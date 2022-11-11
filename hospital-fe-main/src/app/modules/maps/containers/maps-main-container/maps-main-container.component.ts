import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maps-main-container',
  templateUrl: './maps-main-container.component.html',
  styleUrls: ['./maps-main-container.component.css']
})
export class MapsMainContainerComponent implements OnInit {
  num: number = 0;
  constructor(private router: Router) { }

  ngOnInit(): void {
    if(this.router.url.includes("floor")) {
      this.num = 2;
    }
    else if (this.router.url.includes("building")) {
      
      this.num = 1;
    }
    else
      this.num = 0;
  }

}
