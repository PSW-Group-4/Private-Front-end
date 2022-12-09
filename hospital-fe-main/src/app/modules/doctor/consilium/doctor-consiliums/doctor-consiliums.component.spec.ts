import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorConsiliumsComponent } from './doctor-consiliums.component';

describe('DoctorConsiliumsComponent', () => {
  let component: DoctorConsiliumsComponent;
  let fixture: ComponentFixture<DoctorConsiliumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorConsiliumsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorConsiliumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
