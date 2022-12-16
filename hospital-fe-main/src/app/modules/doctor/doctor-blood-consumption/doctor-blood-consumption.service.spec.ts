import { TestBed } from '@angular/core/testing';

import { DoctorBloodConsumptionService } from './doctor-blood-consumption.service';

describe('DoctorBloodConsumptionService', () => {
  let service: DoctorBloodConsumptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorBloodConsumptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
