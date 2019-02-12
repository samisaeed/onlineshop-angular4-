import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';



  @Injectable({
    providedIn: 'root'
  })
  export class AdminAuthGuardService implements CanActivate {

    constructor( private auth: AuthService, private userService: UserService) {}

    canActivate( route: ActivatedRouteSnapshot,
                 state: RouterStateSnapshot): Observable<boolean> {
                     return this.auth.appUser$
                     .pipe(
                       map(appUser => appUser.isAdmin)
                    );
    }
  }
