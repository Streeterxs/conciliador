import { TestBed, async, inject } from '@angular/core/testing';

import { NonUserOnlyGuard } from './non-user-only.guard';

describe('NonUserOnlyGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NonUserOnlyGuard]
    });
  });

  it('should ...', inject([NonUserOnlyGuard], (guard: NonUserOnlyGuard) => {
    expect(guard).toBeTruthy();
  }));
});
