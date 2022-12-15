import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodBanksSubComponent } from './blood-subscription.component';

describe('BloodBanksSubComponent', () => {
  let component: BloodBanksSubComponent;
  let fixture: ComponentFixture<BloodBanksSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodBanksSubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloodBanksSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
