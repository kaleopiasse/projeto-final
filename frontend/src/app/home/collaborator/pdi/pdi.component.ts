import { tap } from 'rxjs/operators';
import {
    GoalModel, SelfFeedbackQuestionModel, StatusOrPeriodModel, WheelOfSkillsModel
} from 'src/app/core/models';
import { GoalsService, SelfFeedbackService, WheelOfSkillService } from 'src/app/core/services';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pdi',
  templateUrl: './pdi.component.html',
  styleUrls: ['./pdi.component.scss']
})
export class PdiComponent implements OnInit {

  pdiId;

  periods: StatusOrPeriodModel[];
  goals: GoalModel[];
  loadingGoals = true;

  selfFeedbacks: SelfFeedbackQuestionModel[];
  loadingSelfFeedbacks = true;

  wheelOfSkills: WheelOfSkillsModel[];
  loadingWheelsOfSkills = true;


  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly goalsService: GoalsService,
    private readonly selfFeedbackService: SelfFeedbackService,
    private readonly wheelOfSkillService: WheelOfSkillService
  ) {
    this.activatedRoute.params.subscribe(res => this.pdiId = res.id);
  }

  ngOnInit() {
    this.goalsService.getGoalPeriods()
      .pipe(
        tap( res => {
          this.periods = res.items;
        })
      ).subscribe();

    this.goalsService.getGoalByPdi(this.pdiId)
      .pipe(
        tap( res => {
          this.goals = res.items;
          this.loadingGoals = false;
        }),
      ).subscribe();

    this.selfFeedbackService.getSelfFeedbacksByPdi(this.pdiId)
      .pipe(
        tap( res => {
          this.selfFeedbacks = res[0].questions;
          this.loadingSelfFeedbacks = false;
        }),
      ).subscribe();

    this.wheelOfSkillService.getWhellOfSkillsByPdi(this.pdiId)
      .pipe(
        tap( res => {
          this.wheelOfSkills = res[0];
          this.loadingWheelsOfSkills = false;
        }),
      ).subscribe();
  }

  getPeriodString(id: string) {
    return this.periods.find( item => item._id === id).description;
  }

}
