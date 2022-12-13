import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BloodRequestManagerComponent } from './blood-request-manager.component';


describe('BloodRequestManagerComponent', () => {
  let component: BloodRequestManagerComponent;
  let fixture: ComponentFixture<BloodRequestManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodRequestManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloodRequestManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
