import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenderApplicationsForReviewComponent } from './tender-applications-for-review.component';

describe('TenderApplicationsForReviewComponent', () => {
  let component: TenderApplicationsForReviewComponent;
  let fixture: ComponentFixture<TenderApplicationsForReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenderApplicationsForReviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenderApplicationsForReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
