import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot  } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private auth: AuthService, private router: Router) { }

  // CanActivate() {
  //  return  this.auth.user$.pipe(
  //     map( user => {
  //     if (user) {return true; }

  //     this.router.navigate(['/login']);
  //     return false;
  //     })
  //   );
  // }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
     return this.auth.user$.pipe(
      map( user => {
        if (user) {return true; }
        this.router.navigate(['/login'], {queryParams: { returnUrl: state.url}});
        return false;
        })
     );

  }
}
