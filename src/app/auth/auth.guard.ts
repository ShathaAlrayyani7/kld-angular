import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route) => {
  const authService = inject(AuthService);
  const nav = inject(Router);
  authService.isLoggedIn;
  console.log(
    '🚀 ~ authService.isLoggedIn:',
    authService.isLoggedIn.getValue()
  );
  if (authService.isLoggedIn.getValue() && !authService.isLogin.getValue()) {
    console.log('🚀 ~ route:', route.url[0].path);
    // nav.navigate([route.url[0].path]);
    return true;
  } else {
    return false;
  }
};
