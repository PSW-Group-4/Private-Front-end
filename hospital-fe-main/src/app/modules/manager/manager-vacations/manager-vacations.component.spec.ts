import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerVacationsComponent } from './manager-vacations.component';

describe('ManagerVacationsComponent', () => {
  let component: ManagerVacationsComponent;
  let fixture: ComponentFixture<ManagerVacationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerVacationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerVacationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
