import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberStepsChartComponent } from './number-steps-chart.component';

describe('NumberStepsChartComponent', () => {
  let component: NumberStepsChartComponent;
  let fixture: ComponentFixture<NumberStepsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberStepsChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberStepsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
