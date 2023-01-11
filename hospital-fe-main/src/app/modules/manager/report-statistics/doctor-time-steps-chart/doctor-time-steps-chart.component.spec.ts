import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorTimeStepsChartComponent } from './doctor-time-steps-chart.component';

describe('DoctorTimeStepsChartComponent', () => {
  let component: DoctorTimeStepsChartComponent;
  let fixture: ComponentFixture<DoctorTimeStepsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorTimeStepsChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorTimeStepsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
