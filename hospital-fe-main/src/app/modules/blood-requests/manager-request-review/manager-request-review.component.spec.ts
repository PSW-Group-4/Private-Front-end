import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerRequestReviewComponent } from './manager-request-review.component';

describe('ManagerRequestReviewComponent', () => {
  let component: ManagerRequestReviewComponent;
  let fixture: ComponentFixture<ManagerRequestReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerRequestReviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerRequestReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
