import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsMainContainerComponent } from './maps-main-container.component';

describe('MapsMainContainerComponent', () => {
  let component: MapsMainContainerComponent;
  let fixture: ComponentFixture<MapsMainContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapsMainContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapsMainContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
