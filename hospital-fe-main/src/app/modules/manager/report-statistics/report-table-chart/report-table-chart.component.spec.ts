import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportTableChartComponent } from './report-table-chart.component';

describe('ReportTableChartComponent', () => {
  let component: ReportTableChartComponent;
  let fixture: ComponentFixture<ReportTableChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportTableChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportTableChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
