import { tap } from 'rxjs/operators';
import { UserService } from 'src/app/core/services';

import { Component, OnInit } from '@angular/core';

import { User } from '../../core/models/user.model';

@Component({
  selector: 'app-admin-sm',
  templateUrl: './admin-sm.component.html',
  styleUrls: ['./admin-sm.component.scss']
})
export class AdminSmComponent implements OnInit {

  userInfo: User;
  loading = true;

  constructor(
    private readonly userService: UserService,
  ) { }

  ngOnInit() {
    this.userService.getUsersById(sessionStorage.getItem('_id'))
      .pipe(
        tap(res => {
          this.userInfo = res;
          this.loading = false;
        }),
      ).subscribe();
  }

}
