import { TestBed } from '@angular/core/testing';
import { BloodRequestManagerService } from './blood-request-manager.service';


describe('BloodRequestManagerService', () => {
  let service: BloodRequestManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BloodRequestManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
