import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiptmentDialogComponent } from './equiptment-dialog.component';

describe('EquiptmentDialogComponent', () => {
  let component: EquiptmentDialogComponent;
  let fixture: ComponentFixture<EquiptmentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquiptmentDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquiptmentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
