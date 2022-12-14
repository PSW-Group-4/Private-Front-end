import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsiliumDoctorListDialogComponent } from './consilium-doctor-list-dialog.component';

describe('ConsiliumDoctorListDialogComponent', () => {
  let component: ConsiliumDoctorListDialogComponent;
  let fixture: ComponentFixture<ConsiliumDoctorListDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsiliumDoctorListDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsiliumDoctorListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
