import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllTendersForReviewComponent } from './view-all-tenders-for-review.component';

describe('ViewAllTendersForReviewComponent', () => {
  let component: ViewAllTendersForReviewComponent;
  let fixture: ComponentFixture<ViewAllTendersForReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllTendersForReviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllTendersForReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
