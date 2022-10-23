import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerFeedbackComponent } from './manager-feedback.component';

describe('ManagerFeedbackComponent', () => {
  let component: ManagerFeedbackComponent;
  let fixture: ComponentFixture<ManagerFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerFeedbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
