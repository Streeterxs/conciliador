import { TestBed, async, inject } from '@angular/core/testing';

import { AdminOrModeratorOnlyGuard } from './admin-or-moderator-only.guard';

describe('AdminOrModeratorOnlyGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminOrModeratorOnlyGuard]
    });
  });

  it('should ...', inject([AdminOrModeratorOnlyGuard], (guard: AdminOrModeratorOnlyGuard) => {
    expect(guard).toBeTruthy();
  }));
});
