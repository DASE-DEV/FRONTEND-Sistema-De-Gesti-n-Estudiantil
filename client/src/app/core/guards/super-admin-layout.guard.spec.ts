import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { superAdminLayoutGuard } from './super-admin-layout.guard';

describe('superAdminLayoutGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => superAdminLayoutGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
