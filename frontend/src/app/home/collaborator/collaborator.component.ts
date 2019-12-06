import { tap } from 'rxjs/operators';
import { User } from 'src/app/core/models';
import { UserService } from 'src/app/core/services';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {

  userInfo: User;

  constructor(
    private readonly userService: UserService,
  ) { }

  ngOnInit() {
    this.userService.getUsersById(sessionStorage.getItem('_id'))
    .pipe(
      tap(res => {
        this.userInfo = res;
      }),
    ).subscribe();
  }

}
