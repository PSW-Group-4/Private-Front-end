import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeCrAppComponent } from './time-cr-app.component';

describe('TimeCrAppComponent', () => {
  let component: TimeCrAppComponent;
  let fixture: ComponentFixture<TimeCrAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeCrAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeCrAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
