import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerBlockingUserComponent } from './manager-blocking-user.component';

describe('ManagerBlockingUserComponent', () => {
  let component: ManagerBlockingUserComponent;
  let fixture: ComponentFixture<ManagerBlockingUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerBlockingUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerBlockingUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
