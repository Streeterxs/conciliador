import { TestBed } from '@angular/core/testing';

import { SalasQueryStoreService } from './salas-query-store.service';

describe('SalasQueryStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalasQueryStoreService = TestBed.get(SalasQueryStoreService);
    expect(service).toBeTruthy();
  });
});
