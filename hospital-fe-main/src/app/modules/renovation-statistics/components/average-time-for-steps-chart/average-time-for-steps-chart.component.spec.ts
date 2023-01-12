import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageTimeForStepsChartComponent } from './average-time-for-steps-chart.component';

describe('AverageTimeForStepsChartComponent', () => {
  let component: AverageTimeForStepsChartComponent;
  let fixture: ComponentFixture<AverageTimeForStepsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AverageTimeForStepsChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AverageTimeForStepsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
