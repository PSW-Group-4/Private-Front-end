import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestMoreBloodComponent } from './request-more-blood.component';

describe('RequestMoreBloodComponent', () => {
  let component: RequestMoreBloodComponent;
  let fixture: ComponentFixture<RequestMoreBloodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestMoreBloodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestMoreBloodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
