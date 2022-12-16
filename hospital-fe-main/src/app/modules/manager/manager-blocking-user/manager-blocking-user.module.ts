import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { ManagerBlockingUserComponent } from './manager-blocking-user/manager-blocking-user.component';
import { MaterialModule } from 'src/app/material/material.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ManagerBlockingUserComponent],
  imports: [
    CommonModule,
    MatTableModule
    , MaterialModule,
    MatButtonModule
  ]
})
export class ManagerBlockingUserModule { }
