import { TestBed } from '@angular/core/testing';

import { BloodSubscribeService } from './blood-subscribe.service';

describe('BloodSubscribeService', () => {
  let service: BloodSubscribeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BloodSubscribeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
