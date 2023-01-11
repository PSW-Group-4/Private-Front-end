import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedUnfinishedPieChartComponent } from './finished-unfinished-pie-chart.component';

describe('FinishedUnfinishedPieChartComponent', () => {
  let component: FinishedUnfinishedPieChartComponent;
  let fixture: ComponentFixture<FinishedUnfinishedPieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishedUnfinishedPieChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinishedUnfinishedPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
