import { CanActivateFn } from '@angular/router';

export const professorGuardTsGuard: CanActivateFn = (route, state) => {
  return true;
};
