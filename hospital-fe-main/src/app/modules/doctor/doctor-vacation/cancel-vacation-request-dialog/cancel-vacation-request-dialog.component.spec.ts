import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelVacationRequestDialogComponent } from './cancel-vacation-request-dialog.component';

describe('CancelVacationRequestDialogComponent', () => {
  let component: CancelVacationRequestDialogComponent;
  let fixture: ComponentFixture<CancelVacationRequestDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelVacationRequestDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancelVacationRequestDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
