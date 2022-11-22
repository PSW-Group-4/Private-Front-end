import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DischargeAdmissionDialogComponent } from './discharge-admission-dialog.component';

describe('DischargeAdmissionDialogComponent', () => {
  let component: DischargeAdmissionDialogComponent;
  let fixture: ComponentFixture<DischargeAdmissionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DischargeAdmissionDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DischargeAdmissionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
