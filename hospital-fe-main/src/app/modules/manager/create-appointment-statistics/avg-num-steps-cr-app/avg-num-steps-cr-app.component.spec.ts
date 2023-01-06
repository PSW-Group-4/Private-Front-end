import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvgNumStepsCrAppComponent } from './avg-num-steps-cr-app.component';

describe('AvgNumStepsCrAppComponent', () => {
  let component: AvgNumStepsCrAppComponent;
  let fixture: ComponentFixture<AvgNumStepsCrAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvgNumStepsCrAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvgNumStepsCrAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
