import { TestBed } from '@angular/core/testing';

import { DoctorBloodRequestService } from './doctor-blood-request.service';

describe('DoctorBloodRequestService', () => {
  let service: DoctorBloodRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorBloodRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
