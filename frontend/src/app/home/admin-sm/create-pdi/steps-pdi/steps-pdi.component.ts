
import { tap } from 'rxjs/operators';
import {
    SelfFeedbackModel, SelfFeedbackQuestionModel, WheelOfSkillsModel, WheelOfSkillsSkillModel
} from 'src/app/core/models';
import { GoalsService, SelfFeedbackService, WheelOfSkillService } from 'src/app/core/services';
import { FormUtil } from 'src/app/core/utils';

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-steps-pdi',
  templateUrl: './steps-pdi.component.html',
  styleUrls: ['./steps-pdi.component.scss']
})
export class StepsPdiComponent implements OnInit {

  step = 1;

  formSelfFeedback: FormGroup;
  questionsFormSelfFeedback: SelfFeedbackQuestionModel[];

  formSkills: FormGroup;
  jsonSkills: WheelOfSkillsSkillModel[];
  actionPlan;

  goals;
  pdiId;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly goalsService: GoalsService,
    private readonly router: Router,
    private readonly selfFeedbackService: SelfFeedbackService,
    private readonly wheelOfSkillService: WheelOfSkillService,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(res => this.pdiId = res.pdi_id);
  }

  continue() {
    switch (this.step) {
      case 1:
        this.createGoals();
        break;
      case 2:
        FormUtil.validateForm(this.formSelfFeedback);

        if (this.formSelfFeedback.invalid) {
          return;
        }

        this.createSelfFeedback();
        break;
      case 3:
        FormUtil.validateForm(this.formSkills);

        if (this.formSkills.invalid) {
          return;
        }

        this.jsonSkills.map(item => {
          item.personalNote = this.formSkills.controls[`personalNote${item.key}`].value;
          item.objective = this.formSkills.controls[`goal${item.key}`].value;
          item.comments = this.formSkills.controls[`comment${item.key}`].value;
        });

        this.step++;
        break;
      case 4:
        this.createWheelOfSkills();
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

    this.questionsFormSelfFeedback.map(item => {
      item.answer = this.formSelfFeedback.controls[item.key].value;
    });

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

  createWheelOfSkills() {
    const wheelOfSkills: WheelOfSkillsModel = {
      pdi_id: this.pdiId,
      skills: this.jsonSkills,
      action_plan: this.actionPlan,
    };

    this.wheelOfSkillService.createWheelOfSkills(wheelOfSkills)
      .pipe(
        tap( res => {
          this.router.navigate(['/']);
        })
      ).subscribe();
  }

}
