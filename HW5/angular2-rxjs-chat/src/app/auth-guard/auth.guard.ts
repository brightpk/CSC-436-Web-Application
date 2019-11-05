import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from 'app/auth-userlogin/auth.service';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      // const isLoggedIn = this.authService.isLoggedIn();
      // console.log('canActivate', isLoggedIn);
      // return isLoggedIn;
      if (this.authService.isLoggedIn()) {
        return true;
      } else {
        this.router.navigate(['login']);
        return false;
      }
  }
}

