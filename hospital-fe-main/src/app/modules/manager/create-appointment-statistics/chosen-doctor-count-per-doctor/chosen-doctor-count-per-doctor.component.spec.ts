import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChosenDoctorCountPerDoctorComponent } from './chosen-doctor-count-per-doctor.component';

describe('ChosenDoctorCountPerDoctorComponent', () => {
  let component: ChosenDoctorCountPerDoctorComponent;
  let fixture: ComponentFixture<ChosenDoctorCountPerDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChosenDoctorCountPerDoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChosenDoctorCountPerDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
