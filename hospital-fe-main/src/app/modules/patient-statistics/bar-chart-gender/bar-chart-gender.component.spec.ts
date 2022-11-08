import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartGenderComponent } from './bar-chart-gender.component';

describe('BarChartGenderComponent', () => {
  let component: BarChartGenderComponent;
  let fixture: ComponentFixture<BarChartGenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarChartGenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarChartGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
