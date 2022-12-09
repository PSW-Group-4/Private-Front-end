import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomRenovationComponent } from './room-renovation.component';

describe('RoomRenovationComponent', () => {
  let component: RoomRenovationComponent;
  let fixture: ComponentFixture<RoomRenovationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomRenovationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomRenovationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
