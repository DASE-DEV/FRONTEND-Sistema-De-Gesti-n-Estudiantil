import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { professorGuardTsGuard } from './professor.guard.ts.guard';

describe('professorGuardTsGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => professorGuardTsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
