import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosePdfOptionsDialogComponent } from './choose-pdf-options-dialog.component';

describe('ChoosePdfOptionsDialogComponent', () => {
  let component: ChoosePdfOptionsDialogComponent;
  let fixture: ComponentFixture<ChoosePdfOptionsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoosePdfOptionsDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoosePdfOptionsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
