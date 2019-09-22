import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;

  loginForm = new FormGroup({
    'user': new FormControl(null, [ Validators.required ]),
    'password': new FormControl(null, [ Validators.required ]),
  });


  constructor() { }

  ngOnInit() {
  }

}
