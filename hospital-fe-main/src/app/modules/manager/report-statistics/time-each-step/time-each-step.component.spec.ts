import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeEachStepComponent } from './time-each-step.component';

describe('TimeEachStepComponent', () => {
  let component: TimeEachStepComponent;
  let fixture: ComponentFixture<TimeEachStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeEachStepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeEachStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
