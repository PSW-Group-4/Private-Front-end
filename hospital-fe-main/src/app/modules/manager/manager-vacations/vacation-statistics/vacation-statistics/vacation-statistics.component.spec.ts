import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationStatisticsComponent } from './vacation-statistics.component';

describe('VacationStatisticsComponent', () => {
  let component: VacationStatisticsComponent;
  let fixture: ComponentFixture<VacationStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacationStatisticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacationStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
