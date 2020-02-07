import { UserService } from 'src/app/core/services';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private readonly userService: UserService,
    private readonly router: Router,
  ) { }

  ngOnInit() {
    if (!this.userService.isAdminOrSm()) {
      this.router.navigate(['/user-collaborator/', sessionStorage.getItem('_id')]);
    }
  }

}
