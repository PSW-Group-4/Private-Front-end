import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrongInputDialogComponent } from './wrong-input-dialog.component';

describe('WrongInputDialogComponent', () => {
  let component: WrongInputDialogComponent;
  let fixture: ComponentFixture<WrongInputDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrongInputDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrongInputDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
