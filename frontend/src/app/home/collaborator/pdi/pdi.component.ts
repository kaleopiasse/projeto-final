import { tap } from 'rxjs/operators';
import { GoalModel } from 'src/app/core/models';
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
  goals: GoalModel[];

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly goalsService: GoalsService,
    private readonly selfFeedbackService: SelfFeedbackService,
    private readonly wheelOfSkillService: WheelOfSkillService
  ) {
    this.activatedRoute.params.subscribe(res => this.pdiId = res.id);
  }

  ngOnInit() {
    this.goalsService.getGoalByPdi(this.pdiId)
      .pipe(
        tap( res => this.goals = res.items),
      ).subscribe();
  }

}
