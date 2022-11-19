import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeStatisticsComponent } from './age-statistics.component';

describe('AgeStatisticsComponent', () => {
  let component: AgeStatisticsComponent;
  let fixture: ComponentFixture<AgeStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgeStatisticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgeStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
