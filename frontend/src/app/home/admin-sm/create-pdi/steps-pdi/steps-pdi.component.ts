import { tap } from 'rxjs/operators';
import { GoalsService } from 'src/app/core/services';
import { FormUtil } from 'src/app/core/utils';

import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-steps-pdi',
  templateUrl: './steps-pdi.component.html',
  styleUrls: ['./steps-pdi.component.scss']
})
export class StepsPdiComponent implements OnInit {

  step = 1;
  formSelfFeedback: FormGroup;
  formSkills: FormGroup;
  goals;

  constructor(
    private readonly goalsService: GoalsService,
  ) { }

  ngOnInit() {
  }

  continue() {
    switch (this.step) {
      case 1:
        this.createGoals();
        break;
      case 2:
        FormUtil.validateForm(this.formSelfFeedback);
        // if (this.formSelfFeedback.invalid) {
        //   return;
        // }
        this.step++;
        break;
      case 3:
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

  createGoals() {
    this.goalsService.createGoals(this.goals)
      .pipe(
        tap(res => this.step++)
      ).subscribe();
  }

}
