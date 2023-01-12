import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenovationStatisticsComponent } from './renovation-statistics.component';

describe('RenovationStatisticsComponent', () => {
  let component: RenovationStatisticsComponent;
  let fixture: ComponentFixture<RenovationStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenovationStatisticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenovationStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
