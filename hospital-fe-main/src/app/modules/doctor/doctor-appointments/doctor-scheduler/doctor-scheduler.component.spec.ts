import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorSchedulerComponent } from './doctor-scheduler.component';

describe('DoctorSchedulerComponent', () => {
  let component: DoctorSchedulerComponent;
  let fixture: ComponentFixture<DoctorSchedulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorSchedulerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
