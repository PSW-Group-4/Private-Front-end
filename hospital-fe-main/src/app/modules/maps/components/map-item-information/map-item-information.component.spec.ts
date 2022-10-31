import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapItemInformationComponent } from './map-item-information.component';

describe('MapItemInformationComponent', () => {
  let component: MapItemInformationComponent;
  let fixture: ComponentFixture<MapItemInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapItemInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapItemInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
