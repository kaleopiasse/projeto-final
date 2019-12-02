import { catchError, finalize, tap } from 'rxjs/operators';
import { User, UserAuthenticate, UserTypes } from 'src/app/core/models';
import { UserService } from 'src/app/core/services';

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  hide = true;
  userTypes: UserTypes;

  userForm = new FormGroup({
    name: new FormControl(null, [ Validators.required ]),
    email: new FormControl(null, [ Validators.required ]),
    password: new FormControl(null, [ Validators.required ]),
    office: new FormControl(null, [ Validators.required ]),
    birthday: new FormControl(null, [ Validators.required ]),
    admissionDate: new FormControl(null, [ Validators.required ]),
    lastChangePosition: new FormControl(null, [ Validators.required ]),
    profiles: new FormControl(null, [Validators.required])
  });

  constructor(
    private readonly router: Router,
    private readonly userService: UserService,
  ) { }

  ngOnInit() {
    this.userService.getUserTypes()
      .pipe(
        tap( res => this.userTypes = res )
      ).subscribe();
  }

  onSubmit() {
    if (this.userForm.invalid) {
      return;
    }

    const user: User = {
      name: this.userForm.controls.name.value,
      email: this.userForm.controls.email.value,
      password: this.userForm.controls.password.value,
      office: this.userForm.controls.office.value,
      birthday: this.userForm.controls.birthday.value,
      admissionDate: this.userForm.controls.admissionDate.value,
      lastChangePosition: this.userForm.controls.lastChangePosition.value,
      profiles: this.userForm.controls.profiles.value
    };

    this.userService.createUsers(user)
      .pipe(
        catchError(err => console.error),
        finalize(() => this.router.navigate(['/'])),
      ).subscribe();
  }

}
