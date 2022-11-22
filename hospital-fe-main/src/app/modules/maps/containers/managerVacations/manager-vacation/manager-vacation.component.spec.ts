import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerVacationComponent } from './manager-vacation.component';

describe('ManagerVacationComponent', () => {
  let component: ManagerVacationComponent;
  let fixture: ComponentFixture<ManagerVacationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerVacationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerVacationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
