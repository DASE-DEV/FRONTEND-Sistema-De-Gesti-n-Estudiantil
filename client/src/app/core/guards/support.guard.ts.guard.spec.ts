import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { supportGuardTsGuard } from './support.guard.ts.guard';

describe('supportGuardTsGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => supportGuardTsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
