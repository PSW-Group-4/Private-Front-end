import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EquipmentList } from 'src/app/modules/shared/model/equipment-list.model';
import { Equipment } from 'src/app/modules/shared/model/equipment.model';

@Component({
  selector: 'app-select-equipment',
  templateUrl: './select-equipment.component.html',
  styleUrls: ['./select-equipment.component.css']
})
export class SelectEquipmentComponent implements OnInit {
  @Input() equipmentList : EquipmentList[] = [];
  eq : EquipmentList= new EquipmentList();
  @Output() selectedEquipment = new EventEmitter<EquipmentList>();

  constructor() { }

  ngOnInit(): void {
  }

  select() {
    this.selectedEquipment.emit(this.eq);
  }

}
