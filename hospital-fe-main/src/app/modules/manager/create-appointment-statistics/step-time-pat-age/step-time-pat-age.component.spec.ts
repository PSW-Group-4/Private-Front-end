import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepTimePatAgeComponent } from './step-time-pat-age.component';

describe('StepTimePatAgeComponent', () => {
  let component: StepTimePatAgeComponent;
  let fixture: ComponentFixture<StepTimePatAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepTimePatAgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepTimePatAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
