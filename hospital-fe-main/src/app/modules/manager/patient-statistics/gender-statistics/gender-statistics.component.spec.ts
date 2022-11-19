import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderStatisticsComponent } from './gender-statistics.component';

describe('GenderStatisticsComponent', () => {
  let component: GenderStatisticsComponent;
  let fixture: ComponentFixture<GenderStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenderStatisticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenderStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
