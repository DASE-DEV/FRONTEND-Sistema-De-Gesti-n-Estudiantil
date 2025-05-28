import { CanActivateFn } from '@angular/router';

export const superAdminLayoutGuard: CanActivateFn = (route, state) => {
  return true;
};
