import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationSchedulerComponent } from './vacation-scheduler.component';

describe('VacationSchedulerComponent', () => {
  let component: VacationSchedulerComponent;
  let fixture: ComponentFixture<VacationSchedulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacationSchedulerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacationSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
