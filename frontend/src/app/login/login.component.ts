import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserAuthenticate } from '../core/models/user.model';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;

  loginForm = new FormGroup({
    user: new FormControl(null, [ Validators.required ]),
    password: new FormControl(null, [ Validators.required ]),
  });

  userAuthenticate: UserAuthenticate = { email: '', password: '' };


  constructor(
    private readonly router: Router,
    private readonly userService: UserService,
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.userAuthenticate.email = this.loginForm.controls.user.value;
    this.userAuthenticate.password = this.loginForm.controls.password.value;
    this.userService.userAuthenticate(this.userAuthenticate)
      .subscribe(
        (res: UserAuthenticate) => this.userService.setAuthToken(res),
        (error => console.log(error)),
        () => this.router.navigate(['/'])
      );
  }

}
