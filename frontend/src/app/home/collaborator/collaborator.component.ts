import { tap } from 'rxjs/operators';
import { PdiModel, User } from 'src/app/core/models';
import { PdiService, UserService } from 'src/app/core/services';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {

  userInfo: User;
  pdis: PdiModel[];

  loading = true;

  constructor(
    private readonly pdiService: PdiService,
    private readonly userService: UserService,
  ) { }

  ngOnInit() {
    this.userService.getUsersById(sessionStorage.getItem('_id'))
    .pipe(
      tap(res => {
        this.pdiService.getPdiByCollaboratorId(sessionStorage.getItem('_id'))
          .pipe(
            tap(pdi => {
              this.userInfo.lastPDI = pdi[0].date;
              this.userInfo.madeBy = pdi[0].user_sm_id.name;
              this.pdis = pdi;
            })
          ).subscribe();
        this.userInfo = res;
        this.loading = false;
      }),
    ).subscribe();
  }

}
