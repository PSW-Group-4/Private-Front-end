import { TestBed } from '@angular/core/testing';

import { ReportEventSourcingService } from './report-event-sourcing.service';

describe('ReportEventSourcingService', () => {
  let service: ReportEventSourcingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportEventSourcingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
