import { TestBed } from '@angular/core/testing';

import { TokenHttpService } from './token-http.service';

describe('TokenHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TokenHttpService = TestBed.get(TokenHttpService);
    expect(service).toBeTruthy();
  });
});
