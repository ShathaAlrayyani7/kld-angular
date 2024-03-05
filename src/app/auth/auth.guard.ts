import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route) => {
  const authService = inject(AuthService);
  const nav = inject(Router);
  authService.isLoggedIn;
  if (authService.isLoggedIn.getValue()) {
    return true;
  } else {
    console.log('you are not allowed');
    nav.navigate(['auth'])
    return false;
  }
};
