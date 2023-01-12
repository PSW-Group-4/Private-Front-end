import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberWhereSessionWereLeftOffChartComponent } from './number-where-session-were-left-off-chart.component';

describe('NumberWhereSessionWereLeftOffChartComponent', () => {
  let component: NumberWhereSessionWereLeftOffChartComponent;
  let fixture: ComponentFixture<NumberWhereSessionWereLeftOffChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberWhereSessionWereLeftOffChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberWhereSessionWereLeftOffChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
