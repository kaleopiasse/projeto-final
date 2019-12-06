import { Observable } from 'rxjs';
import { UserTypes } from 'src/app/core/models';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User, UserAuthenticate } from '../models/user.model';
import { service, ServiceEndpoints } from '../utils/endpoints.util';

@Injectable()
export class UserService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  isAuthenticated() {
    return sessionStorage.getItem('accessToken');
  }

  isAdminOrSm() {
    const profile = sessionStorage.getItem('profile');
    if (profile === 'admin' || profile === 'sm') {
      return true;
    } else {
      return false;
    }
  }

  setAuthToken(user: UserAuthenticate) {
    sessionStorage.setItem('_id', user._id);
    sessionStorage.setItem('email', user.email);
    sessionStorage.setItem('name', user.name);
    sessionStorage.setItem('accessToken', user.accessToken);
    sessionStorage.setItem('profile', user.profiles[0]);
  }

  userAuthenticate(user: UserAuthenticate) {
    return this.http.post(service(ServiceEndpoints.UsersAuthenticate), user);
  }

  getAllUsers() {
    return this.http.get(service(ServiceEndpoints.Users)) as Observable<{items: User[]}>;
  }

  getUserTypes() {
    return this.http.get(service(ServiceEndpoints.UserTypes)) as Observable<UserTypes>;
  }

  getUsersById(id: string) {
    return this.http.get(service(ServiceEndpoints.UsersById, id)) as Observable<User>;
  }

  createUsers(user: User) {
    return this.http.post(service(ServiceEndpoints.Users), user) as Observable<User>;
  }

}
