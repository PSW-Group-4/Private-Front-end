import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumPatEachStepComponent } from './num-pat-each-step.component';

describe('NumPatEachStepComponent', () => {
  let component: NumPatEachStepComponent;
  let fixture: ComponentFixture<NumPatEachStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumPatEachStepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumPatEachStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
