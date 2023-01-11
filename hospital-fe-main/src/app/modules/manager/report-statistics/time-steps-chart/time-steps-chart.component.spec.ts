import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeStepsChartComponent } from './time-steps-chart.component';

describe('TimeStepsChartComponent', () => {
  let component: TimeStepsChartComponent;
  let fixture: ComponentFixture<TimeStepsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeStepsChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeStepsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
