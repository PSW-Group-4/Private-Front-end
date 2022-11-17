import { Pipe, PipeTransform } from '@angular/core';
import { RoomMap } from '../../../models/room-map.model';

@Pipe({
  name: 'filterequipment'
})
export class FilterPipeEquipment implements PipeTransform {

    transform(value: RoomMap[], filterString: string): RoomMap[] {
        if (value.length === 0 || !filterString) {
          return value;
        }
        let filteredUsers: RoomMap[] = [];
        for (let user of value) {
            for (let eq of user.room.equipmentList){
                if (eq.name.toLowerCase().includes(filterString.toLowerCase())) {
                    filteredUsers.push(user);
                    break;
                  }
            }
        }
        return filteredUsers;
      }
}