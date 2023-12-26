import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

export const authGuardGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
  const router = inject(Router);

  if(localStorage.getItem('token')){
    return true;
  }
  else{
    router.navigate(['/']);
    return false;
  }
};
