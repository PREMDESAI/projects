import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  // Implement the authentication logic here
  // Return true if the user is authenticated, otherwise return false
  const authService = inject(AuthService);
  const router = inject(Router);
  if(authService.isAuthenticated()) {
    return true;
  }else{
    router.navigate(['/login']);
    return false;
  }
};
