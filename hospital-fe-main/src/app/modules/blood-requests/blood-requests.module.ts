import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerRequestReviewComponent } from './manager-request-review/manager-request-review.component';
import { MatTableModule } from '@angular/material/table';
import { RejectionDialogComponent } from './rejection-dialog/rejection-dialog.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
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
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule

  ]
})
export class BloodRequestsModule { }
