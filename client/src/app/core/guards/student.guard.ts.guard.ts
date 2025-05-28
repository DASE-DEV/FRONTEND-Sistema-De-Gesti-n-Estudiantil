import { CanActivateFn } from '@angular/router';

export const studentGuardTsGuard: CanActivateFn = (route, state) => {
  return true;
};
