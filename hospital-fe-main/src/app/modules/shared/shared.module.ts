import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquiptmentDialogComponent } from './components/equiptment-dialog/equiptment-dialog.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    EquiptmentDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class SharedModule { }
