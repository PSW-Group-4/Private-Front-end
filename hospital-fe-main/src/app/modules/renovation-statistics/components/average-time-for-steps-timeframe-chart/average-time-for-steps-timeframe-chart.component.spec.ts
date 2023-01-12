import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageTimeForStepsTimeframeChartComponent } from './average-time-for-steps-timeframe-chart.component';

describe('AverageTimeForStepsTimeframeChartComponent', () => {
  let component: AverageTimeForStepsTimeframeChartComponent;
  let fixture: ComponentFixture<AverageTimeForStepsTimeframeChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AverageTimeForStepsTimeframeChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AverageTimeForStepsTimeframeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
