import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBloodConsumptionRecordComponent } from './create-blood-consumption-record.component';

describe('CreateBloodConsumptionRecordComponent', () => {
  let component: CreateBloodConsumptionRecordComponent;
  let fixture: ComponentFixture<CreateBloodConsumptionRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBloodConsumptionRecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBloodConsumptionRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
