import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router,
    RouterStateSnapshot, UrlSegment, UrlTree
} from '@angular/router';

import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(
    private readonly userService: UserService,
    private readonly router: Router,
  ) {

  }

  private verifyAccess(url: string) {
    if (this.userService.isAuthenticated()) {
      return true;
    }

    if (url !== 'login') {
      this.router.navigate(['/login']);
    } else {
      return true;
    }

    return false;
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.verifyAccess(state.url.split('/')[0]);
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.verifyAccess(state.url.split('/')[0]);
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.verifyAccess(route.path);
  }

}
