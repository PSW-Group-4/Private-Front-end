import { TestBed } from '@angular/core/testing';

import { ReportConfigsService } from './report.configs.service';

describe('ReportConfigsService', () => {
  let service: ReportConfigsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportConfigsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
