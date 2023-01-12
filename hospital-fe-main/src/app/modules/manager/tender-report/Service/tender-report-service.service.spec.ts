import { TestBed } from '@angular/core/testing';

import { TenderReportServiceService } from './tender-report-service.service';

describe('TenderReportServiceService', () => {
  let service: TenderReportServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TenderReportServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
