import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorBloodConsumptionComponent } from './doctor-blood-consumption.component';

describe('DoctorBloodConsumptionComponent', () => {
  let component: DoctorBloodConsumptionComponent;
  let fixture: ComponentFixture<DoctorBloodConsumptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorBloodConsumptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorBloodConsumptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
