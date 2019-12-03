import { tap } from 'rxjs/operators';
import { User } from 'src/app/core/models';
import { UserService } from 'src/app/core/services';
import { FormUtil } from 'src/app/core/utils';

import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-pdi',
  templateUrl: './create-pdi.component.html',
  styleUrls: ['./create-pdi.component.scss']
})
export class CreatePdiComponent implements OnInit {

  userId: string;
  userInfo: User;
  loading = true;

  step = 1;
  formSelfFeedback: FormGroup;
  formSkills: FormGroup;
  goals;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly userService: UserService,
  ) {
    this.activatedRoute.params.subscribe(res => this.userId = res.id);
  }

  ngOnInit() {
    this.userService.getUsersById(this.userId)
      .pipe(
        tap(res => {
          this.userInfo = res;
          this.loading = false;
        }),
      ).subscribe();
  }

  continue() {
    switch (this.step) {
      case 1:
        this.step++;
        break;
      case 2:
        console.log(this.goals);
        break;
      case 3:
        FormUtil.validateForm(this.formSelfFeedback);
        // if (this.formSelfFeedback.invalid) {
        //   return;
        // }
        this.step++;
        break;
      case 4:
        FormUtil.validateForm(this.formSkills);
        // if (this.formSkills.invalid) {
        //   return;
        // }
        this.step++;
        break;
      case 5:
        this.step = 1;
        break;
      default:
        this.step++;
        break;
    }
  }

  back() {
    switch (this.step) {
      default:
        this.step--;
        break;
    }
  }

}
