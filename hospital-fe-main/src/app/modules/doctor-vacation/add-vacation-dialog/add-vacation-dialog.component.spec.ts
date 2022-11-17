import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVacationDialogComponent } from './add-vacation-dialog.component';

describe('AddVacationDialogComponent', () => {
  let component: AddVacationDialogComponent;
  let fixture: ComponentFixture<AddVacationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVacationDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVacationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
