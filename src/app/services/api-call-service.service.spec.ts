import { TestBed } from '@angular/core/testing';

import { ApiCallServiceService } from './api-call-service.service';

describe('ApiCallServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiCallServiceService = TestBed.get(ApiCallServiceService);
    expect(service).toBeTruthy();
  });
});
