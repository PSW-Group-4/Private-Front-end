import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeSpentOnSessionPerAgeGroupComponent } from './time-spent-on-session-per-age-group.component';

describe('TimeSpentOnSessionPerAgeGroupComponent', () => {
  let component: TimeSpentOnSessionPerAgeGroupComponent;
  let fixture: ComponentFixture<TimeSpentOnSessionPerAgeGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeSpentOnSessionPerAgeGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeSpentOnSessionPerAgeGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
