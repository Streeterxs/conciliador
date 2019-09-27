import { TestBed } from '@angular/core/testing';

import { SalasStoreService } from './salas-store.service';

describe('SalasStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalasStoreService = TestBed.get(SalasStoreService);
    expect(service).toBeTruthy();
  });
});
