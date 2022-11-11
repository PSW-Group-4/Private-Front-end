import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerRequestReviewComponent } from './manager-request-review/manager-request-review.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    ManagerRequestReviewComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
  ]
})
export class BloodRequestsModule { }
