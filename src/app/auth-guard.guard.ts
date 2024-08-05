import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { JwtDecodeService } from './jwt-decode.service';
import { GeneralService } from './general.service';

export const authGuardGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
  const router = inject(Router);
  const authService = inject(JwtDecodeService);
  const gService = inject(GeneralService);

  if (!authService.isAuthenticated()){
    console.log ('logged Out.');

    localStorage.setItem('isLoggedIn',"false");
        console.log("Token has expired! Login again.");
        gService.logout();
        router.navigate(['/login']);
    return false;
}
console.log ('Welcome');
return true;
  
};
