import { TestBed } from '@angular/core/testing';

import { SalasFacadeService } from './salas-facade.service';

describe('SalasFacadeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalasFacadeService = TestBed.get(SalasFacadeService);
    expect(service).toBeTruthy();
  });
});
