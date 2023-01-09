import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorTimeStepsComponent } from './doctor-time-steps.component';

describe('DoctorTimeStepsComponent', () => {
  let component: DoctorTimeStepsComponent;
  let fixture: ComponentFixture<DoctorTimeStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorTimeStepsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorTimeStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
