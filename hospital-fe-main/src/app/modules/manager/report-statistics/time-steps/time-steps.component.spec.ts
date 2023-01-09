import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeStepsComponent } from './time-steps.component';

describe('TimeStepsComponent', () => {
  let component: TimeStepsComponent;
  let fixture: ComponentFixture<TimeStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeStepsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
