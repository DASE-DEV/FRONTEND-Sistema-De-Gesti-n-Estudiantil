import { CanActivateFn } from '@angular/router';

export const supportGuardTsGuard: CanActivateFn = (route, state) => {
  return true;
};
