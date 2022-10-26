import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodBankRegistrationComponent } from './blood-bank-registration.component';

describe('BloodBankRegistrationComponent', () => {
  let component: BloodBankRegistrationComponent;
  let fixture: ComponentFixture<BloodBankRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodBankRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloodBankRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
