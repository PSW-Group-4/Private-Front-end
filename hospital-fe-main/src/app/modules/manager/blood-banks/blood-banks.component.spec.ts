import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodBanksComponent } from './blood-banks.component';

describe('BloodBanksComponent', () => {
  let component: BloodBanksComponent;
  let fixture: ComponentFixture<BloodBanksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodBanksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloodBanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
