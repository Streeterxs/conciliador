import { TestBed } from '@angular/core/testing';

import { RequestQueueService } from './request-queue.service';

describe('RequestQueueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequestQueueService = TestBed.get(RequestQueueService);
    expect(service).toBeTruthy();
  });
});
