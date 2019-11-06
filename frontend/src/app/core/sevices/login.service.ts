import { Injectable } from '@angular/core';
import { Login, User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user: User;

  constructor() { }

  isAuthenticated() {
    // To-do pegar dados do data
    return true;
  }

  login(login: Login) {
    if (login.user === 'kaleopiasse@gmail.com' && login.password === '123456') {
      return this.user = {
        name: 'Kaleo Aparecido Piasse',
        office: 'Desenvolvedor Web Junior 1',
        birthDate: '15/04/1991',
        effectiveDate: '02/2019',
        lastChangeOffice: '02/2019',
        lastPDI: '09/07/2019',
        madeBy: 'Ana Lima',
        type: 3,
      };
    } else if (login.user === 'analima@gmail.com' && login.password === '123456') {
      return this.user = {
        name: 'Ana Lima',
        office: 'SM',
        birthDate: '15/04/1991',
        effectiveDate: '02/2019',
        lastChangeOffice: '02/2019',
        lastPDI: '09/07/2019',
        madeBy: 'Ana Lima',
        type: 2,
      };
    }
  }

}
