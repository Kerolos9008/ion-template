import { TestBed } from '@angular/core/testing';

import { LoadingUIService } from './loading-ui.service';

describe('LoadingUIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadingUIService = TestBed.get(LoadingUIService);
    expect(service).toBeTruthy();
  });
});
