import { TestBed } from '@angular/core/testing';

import { SalasHttpService } from './salas-http.service';

describe('SalasHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalasHttpService = TestBed.get(SalasHttpService);
    expect(service).toBeTruthy();
  });
});
