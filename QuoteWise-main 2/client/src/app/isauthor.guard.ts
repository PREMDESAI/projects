import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

export const isauthorGuard: CanActivateFn = (route, state) => {
  const id = route.paramMap.get('id');
  const authorService = inject(AuthService);
  const router = inject(Router);
  if(authorService.getUser()?.id === id) {
    return true;
  }else{
    alert('Not Authorized');
    router.navigate(['/']);
    return false;
  }
};
