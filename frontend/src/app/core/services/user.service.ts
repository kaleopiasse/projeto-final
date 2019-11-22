import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { UserAuthenticate } from '../models/user.model';
import { service, ServiceEndpoints } from '../utils/endpoints.util';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  setAuthToken(user: UserAuthenticate) {
    sessionStorage.setItem('email', user.email);
    sessionStorage.setItem('name', user.name);
    sessionStorage.setItem('accessToken', user.accessToken);
  }

  userAuthenticate(user: UserAuthenticate) {
    return this.http.post(service(ServiceEndpoints.UserAuthenticate), user);
  }
}
