import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerRequestReviewComponent } from './manager-request-review/manager-request-review.component';
import { MatTableModule } from '@angular/material/table';
import { RejectionDialogComponent } from './rejection-dialog/rejection-dialog.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    ManagerRequestReviewComponent,
    RejectionDialogComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    NgbModule,
    FormsModule

  ]
})
export class BloodRequestsModule { }
