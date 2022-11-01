import { TestBed } from '@angular/core/testing';

import { BuildingServiceService } from './building-service.service';

describe('BuildingServiceService', () => {
  let service: BuildingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuildingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
