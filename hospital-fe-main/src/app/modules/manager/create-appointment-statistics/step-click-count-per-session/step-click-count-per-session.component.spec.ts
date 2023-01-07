import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepClickCountPerSessionComponent } from './step-click-count-per-session.component';

describe('StepClickCountPerSessionComponent', () => {
  let component: StepClickCountPerSessionComponent;
  let fixture: ComponentFixture<StepClickCountPerSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepClickCountPerSessionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepClickCountPerSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
