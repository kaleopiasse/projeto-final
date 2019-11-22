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
export class NotAuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(
    private readonly router: Router,
    private readonly userService: UserService,
  ) {}

  private verifyAccess() {
    if (this.userService.isAuthenticated()) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.verifyAccess();
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.verifyAccess();
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.verifyAccess();
  }

}
