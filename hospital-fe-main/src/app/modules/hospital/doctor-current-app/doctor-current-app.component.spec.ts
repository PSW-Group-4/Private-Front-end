import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorCurrentAppComponent } from './doctor-current-app.component';

describe('DoctorCurrentAppComponent', () => {
  let component: DoctorCurrentAppComponent;
  let fixture: ComponentFixture<DoctorCurrentAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorCurrentAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorCurrentAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
