import { Observable } from 'rxjs';

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

  setAuthToken(user: UserAuthenticate) {
    sessionStorage.setItem('_id', user._id);
    sessionStorage.setItem('email', user.email);
    sessionStorage.setItem('name', user.name);
    sessionStorage.setItem('accessToken', user.accessToken);
  }

  userAuthenticate(user: UserAuthenticate) {
    return this.http.post(service(ServiceEndpoints.UsersAuthenticate), user);
  }

  getUsersById(id: string) {
    return this.http.get(service(ServiceEndpoints.UsersById, id)) as Observable<User>;
  }
}
