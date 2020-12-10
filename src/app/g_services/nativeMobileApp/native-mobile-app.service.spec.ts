import { TestBed } from '@angular/core/testing';

import { NativeMobileAppService } from './native-mobile-app.service';

describe('NativeMobileAppService', () => {
  let service: NativeMobileAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NativeMobileAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
