import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentStatisticsComponent } from './appointment-statistics.component';

describe('AppointmentStatisticsComponent', () => {
  let component: AppointmentStatisticsComponent;
  let fixture: ComponentFixture<AppointmentStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentStatisticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
