import { tap } from 'rxjs/operators';
import { GoalModel, StatusOrPeriodModel } from 'src/app/core/models';
import { GoalsService } from 'src/app/core/services';

import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {

  @Output() goalsEmiter = new EventEmitter();

  showAddGoal = true;
  goals: GoalModel[] = [];
  periods: StatusOrPeriodModel[];

  constructor(
    private readonly goalsService: GoalsService,
  ) { }

  ngOnInit() {
    this.goalsService.getGoalPeriods()
    .pipe(
      tap( res => {
        this.periods = res.items;
      })
    ).subscribe();
  }

  addGoal() {
    this.showAddGoal = false;
  }

  reciverGoal(goal: GoalModel) {
    this.goals.push(goal);
    this.goals.sort((a, b) => a.key - b.key);
    this.goalsEmiter.emit(this.goals);
  }
}
