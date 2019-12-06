import { tap } from 'rxjs/operators';
import { SelfFeedbackModel, SelfFeedbackQuestionModel } from 'src/app/core/models';
import { GoalsService, SelfFeedbackService } from 'src/app/core/services';
import { FormUtil } from 'src/app/core/utils';

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-steps-pdi',
  templateUrl: './steps-pdi.component.html',
  styleUrls: ['./steps-pdi.component.scss']
})
export class StepsPdiComponent implements OnInit {

  step = 1;
  formSelfFeedback: FormGroup;
  formSkills: FormGroup;
  questionsFormSelfFeedback: SelfFeedbackQuestionModel[];
  goals;
  pdiId;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly selfFeedbackService: SelfFeedbackService,
    private readonly goalsService: GoalsService,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(res => this.pdiId = res.pdi_id);
  }

  continue() {
    switch (this.step) {
      case 1:
        // this.createGoals();
        this.step++;
        break;
      case 2:
        FormUtil.validateForm(this.formSelfFeedback);
        this.questionsFormSelfFeedback.map(item => {
          item.answer = this.formSelfFeedback.controls[item.key].value;
        });
        // if (this.formSelfFeedback.invalid) {
        //  this.createSelfFeedback();
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

  createSelfFeedback() {
    const selfFeedback: SelfFeedbackModel = {
      pdi_id: this.pdiId,
      questions: this.questionsFormSelfFeedback,
    };

    this.selfFeedbackService.createSelfFeedback(selfFeedback)
      .pipe(
        tap( res => {
          this.step++;
        })
      ).subscribe();
  }

}
