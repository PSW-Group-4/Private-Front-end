import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenderReportComponent } from './tender-report.component';

describe('TenderReportComponent', () => {
  let component: TenderReportComponent;
  let fixture: ComponentFixture<TenderReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenderReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenderReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
