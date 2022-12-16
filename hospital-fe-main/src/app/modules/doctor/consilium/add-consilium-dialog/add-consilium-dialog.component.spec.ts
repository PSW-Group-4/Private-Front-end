import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConsiliumDialogComponent } from './add-consilium-dialog.component';

describe('AddConsiliumDialogComponent', () => {
  let component: AddConsiliumDialogComponent;
  let fixture: ComponentFixture<AddConsiliumDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddConsiliumDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddConsiliumDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
