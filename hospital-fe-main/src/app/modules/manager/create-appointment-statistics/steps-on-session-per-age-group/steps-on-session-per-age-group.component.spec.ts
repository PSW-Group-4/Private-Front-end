import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsOnSessionPerAgeGroupComponent } from './steps-on-session-per-age-group.component';

describe('StepsOnSessionPerAgeGroupComponent', () => {
  let component: StepsOnSessionPerAgeGroupComponent;
  let fixture: ComponentFixture<StepsOnSessionPerAgeGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepsOnSessionPerAgeGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepsOnSessionPerAgeGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
