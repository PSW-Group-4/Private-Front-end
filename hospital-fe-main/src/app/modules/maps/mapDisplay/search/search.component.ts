import { Component, OnInit } from '@angular/core';
import { RoomMap } from '../../models/room-map.model';
import { MapsFacade } from '../../maps.facade';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  maps$:RoomMap[]=[];
  searchText = '';
  constructor(private mapsFacade:MapsFacade) {
   }

  ngOnInit(): void {
    this.mapsFacade.getRoomMaps$().subscribe(res=>{
      this.maps$ = res;
    })
  }

}
