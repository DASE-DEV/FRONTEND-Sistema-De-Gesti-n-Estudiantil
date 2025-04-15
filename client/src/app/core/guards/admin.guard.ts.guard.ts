import { CanActivateFn } from '@angular/router';

export const adminGuardTsGuard: CanActivateFn = (route, state) => {
  return true;
};
