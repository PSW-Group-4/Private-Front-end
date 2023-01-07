import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeSpentOnStepPerSessionComponent } from './time-spent-on-step-per-session.component';

describe('TimeSpentOnStepPerSessionComponent', () => {
  let component: TimeSpentOnStepPerSessionComponent;
  let fixture: ComponentFixture<TimeSpentOnStepPerSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeSpentOnStepPerSessionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeSpentOnStepPerSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
