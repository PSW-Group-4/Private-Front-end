import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EquipmentList } from 'src/app/modules/shared/model/equipment-list.model';
import { Equipment } from 'src/app/modules/shared/model/equipment.model';
import { Room } from 'src/app/modules/shared/model/room.model';
import { MapsFacade } from '../../maps.facade';


@Component({
  selector: 'app-equiptment-dialog',
  templateUrl: './equiptment-dialog.component.html',
  styleUrls: ['./equiptment-dialog.component.css']
})
export class EquiptmentDialogComponent implements OnInit {
  displayedColumns = ['id', 'name', 'amount'];
  dataSource : MatTableDataSource<EquipmentList> = new MatTableDataSource();
  isUpdating : boolean = true;
  clickedRoom: Room = new Room;  
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  // good dialog size 700x800 wxh
  constructor(private mapsFacade: MapsFacade, private dialogRef: MatDialogRef<EquiptmentDialogComponent>, @Inject(MAT_DIALOG_DATA) data : any) { 
    // maybe give id and then pull data from service if we change dto not to transfer everything
    mapsFacade.getRoomMapById$(data.id).subscribe({
      next: (v) => {
        this.clickedRoom = v.room
        this.dataSource = new MatTableDataSource<EquipmentList>(this.clickedRoom.roomsEquipment);
        this.isUpdating = false;
      }
    })
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  
}
