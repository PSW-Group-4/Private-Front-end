import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleSuccessRatePerAgeGroupComponent } from './schedule-success-rate-per-age-group.component';

describe('ScheduleSuccessRatePerAgeGroupComponent', () => {
  let component: ScheduleSuccessRatePerAgeGroupComponent;
  let fixture: ComponentFixture<ScheduleSuccessRatePerAgeGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleSuccessRatePerAgeGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleSuccessRatePerAgeGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
