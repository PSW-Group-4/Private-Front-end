import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTreatmentDialogComponent } from './update-treatment-dialog.component';

describe('UpdateTreatmentDialogComponent', () => {
  let component: UpdateTreatmentDialogComponent;
  let fixture: ComponentFixture<UpdateTreatmentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTreatmentDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTreatmentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
