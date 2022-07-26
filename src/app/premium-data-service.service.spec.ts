import { TestBed } from '@angular/core/testing';

import { PremiumDataServiceService } from './premium-data-service.service';

describe('PremiumDataServiceService', () => {
  let service: PremiumDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PremiumDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
