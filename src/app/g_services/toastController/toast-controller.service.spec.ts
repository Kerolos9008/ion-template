import { TestBed } from '@angular/core/testing';

import { ToastControllerService } from './toast-controller.service';

describe('ToastComptrollerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToastControllerService = TestBed.get(ToastControllerService);
    expect(service).toBeTruthy();
  });
});
