import { TestBed } from '@angular/core/testing';

import { FloorServiceService } from './floor-service.service';

describe('FloorServiceService', () => {
  let service: FloorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FloorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
