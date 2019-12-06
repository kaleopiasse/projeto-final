import { GoalModel, StatusOrPeriodModel } from 'src/app/core/models';

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-goals',
  templateUrl: './list-goals.component.html',
  styleUrls: ['./list-goals.component.scss']
})
export class ListGoalsComponent {

  @Input() goals: GoalModel[];
  @Input() periods: StatusOrPeriodModel[];

  getPeriodDescription(id: string) {
    return this.periods.find( item => item._id === id).description;
  }

}
