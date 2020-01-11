import { TestBed, async, inject } from '@angular/core/testing';

import { NonUserOrModeratorGuard } from './non-user-or-moderator.guard';

describe('NonUserOrModeratorGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NonUserOrModeratorGuard]
    });
  });

  it('should ...', inject([NonUserOrModeratorGuard], (guard: NonUserOrModeratorGuard) => {
    expect(guard).toBeTruthy();
  }));
});
