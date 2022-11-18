import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerRootComponent } from './manager-root/manager-root.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    ManagerRootComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class ManagerModule { }
