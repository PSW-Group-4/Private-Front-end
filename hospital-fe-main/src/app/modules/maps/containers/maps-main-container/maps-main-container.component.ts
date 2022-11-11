import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maps-main-container',
  templateUrl: './maps-main-container.component.html',
  styleUrls: ['./maps-main-container.component.css']
})
export class MapsMainContainerComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
