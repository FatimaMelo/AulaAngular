import { TestBed } from '@angular/core/testing';

import { CelularserviceService } from './celularservice.service';

describe('CelularserviceService', () => {
  let service: CelularserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CelularserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
