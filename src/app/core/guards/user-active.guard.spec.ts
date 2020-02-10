import { TestBed, async, inject } from '@angular/core/testing';

import { UserActiveGuard } from './user-active.guard';

describe('UserActiveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserActiveGuard]
    });
  });

  it('should ...', inject([UserActiveGuard], (guard: UserActiveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
