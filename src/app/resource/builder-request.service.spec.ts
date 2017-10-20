import { TestBed, inject } from '@angular/core/testing';

import { BuilderRequestService } from './builder-request.service';

describe('BuilderRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuilderRequestService]
    });
  });

  it('should be created', inject([BuilderRequestService], (service: BuilderRequestService) => {
    expect(service).toBeTruthy();
  }));
});
