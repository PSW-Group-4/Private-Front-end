import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquiptmentDialogComponent } from './components/equiptment-dialog/equiptment-dialog.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ShowRoomInfoComponent } from './components/show-room-info/show-room-info.component';


@NgModule({
  declarations: [
    EquiptmentDialogComponent,
    ShowRoomInfoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ShowRoomInfoComponent,
    EquiptmentDialogComponent
  ]
})
export class SharedModule { }
