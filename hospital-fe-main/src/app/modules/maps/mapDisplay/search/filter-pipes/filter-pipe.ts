import { Pipe, PipeTransform } from '@angular/core';
import { RoomMap } from '../../../models/room-map.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

    transform(value: RoomMap[], filterString: string): RoomMap[] {
        if (value.length === 0 || !filterString) {
          return value;
        }
        let filteredUsers: RoomMap[] = [];
        for (let user of value) {
          if (user.room.name.toLowerCase().includes(filterString.toLowerCase())) {
            filteredUsers.push(user);
          }
        }
        return filteredUsers;
      }
}