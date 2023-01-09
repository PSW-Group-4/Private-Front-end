import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberEachStepChartComponent } from './number-each-step-chart.component';

describe('NumberEachStepChartComponent', () => {
  let component: NumberEachStepChartComponent;
  let fixture: ComponentFixture<NumberEachStepChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberEachStepChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberEachStepChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
