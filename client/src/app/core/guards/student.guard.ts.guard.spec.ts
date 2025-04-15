import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { studentGuardTsGuard } from './student.guard.ts.guard';

describe('studentGuardTsGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => studentGuardTsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
