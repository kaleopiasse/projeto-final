import { tap } from 'rxjs/operators';
import { PdiModel, User } from 'src/app/core/models';
import { GoalsService, PdiService, UserService } from 'src/app/core/services';

import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-pdi',
  templateUrl: './create-pdi.component.html',
  styleUrls: ['./create-pdi.component.scss']
})
export class CreatePdiComponent implements OnInit {

  collaboratorId: string;
  collaboratorInfo: User;
  loading = true;

  smId: string;

  pdiId: string;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly pdiService: PdiService,
    private readonly router: Router,
    private readonly userService: UserService,
  ) {
    this.activatedRoute.params.subscribe(res => this.collaboratorId = res.id);
  }

  ngOnInit() {
    this.smId = sessionStorage.getItem('_id');
    this.userService.getUsersById(this.collaboratorId)
      .pipe(
        tap(res => {
          this.collaboratorInfo = res;
          this.loading = false;
        }),
      ).subscribe();
  }



  createPdi() {
    const pdi: PdiModel = {
      user_collaborator_id: this.collaboratorId,
      user_sm_id: this.smId
    };
    this.pdiService.createPdis(pdi)
      .pipe(
        tap(res => {
          this.pdiId = res._id;
          this.router.navigate(['pdi', this.pdiId], { relativeTo: this.activatedRoute });
        })
      ).subscribe();
  }

}
