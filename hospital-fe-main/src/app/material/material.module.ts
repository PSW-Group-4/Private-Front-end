import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';

const Material = [
  CommonModule,
  MatInputModule,
  MatButtonModule,
  MatTableModule,
  MatCardModule,
  MatIconModule,
  MatTooltipModule,
  MatFormFieldModule,
  MatTabsModule,
  MatDialogModule,
  MatSelectModule,
  MatDatepickerModule
]

@NgModule({
  declarations: [],
  imports: [ Material],
  exports: [ Material]
})
export class MaterialModule {}
