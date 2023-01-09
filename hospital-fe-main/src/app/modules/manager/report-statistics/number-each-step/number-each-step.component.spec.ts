import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberEachStepComponent } from './number-each-step.component';

describe('NumberEachStepComponent', () => {
  let component: NumberEachStepComponent;
  let fixture: ComponentFixture<NumberEachStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberEachStepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberEachStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
