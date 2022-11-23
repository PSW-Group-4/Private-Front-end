import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportConfigsComponent } from './report-configs.component';

describe('ReportConfigsComponent', () => {
  let component: ReportConfigsComponent;
  let fixture: ComponentFixture<ReportConfigsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportConfigsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportConfigsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
