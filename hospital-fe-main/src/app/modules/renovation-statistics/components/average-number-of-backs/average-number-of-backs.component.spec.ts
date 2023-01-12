import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageNumberOfBacksComponent } from './average-number-of-backs.component';

describe('AverageNumberOfBacksComponent', () => {
  let component: AverageNumberOfBacksComponent;
  let fixture: ComponentFixture<AverageNumberOfBacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AverageNumberOfBacksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AverageNumberOfBacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
