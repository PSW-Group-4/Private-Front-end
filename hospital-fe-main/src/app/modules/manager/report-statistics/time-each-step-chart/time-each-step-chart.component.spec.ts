import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeEachStepChartComponent } from './time-each-step-chart.component';

describe('TimeEachStepChartComponent', () => {
  let component: TimeEachStepChartComponent;
  let fixture: ComponentFixture<TimeEachStepChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeEachStepChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeEachStepChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
