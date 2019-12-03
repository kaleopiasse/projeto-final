import { Goal } from 'src/app/core/models';

import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {

  @Output() goalsEmiter = new EventEmitter();

  showAddGoal = true;
  goals = { 1: [], 2: [], 3: [], 4: [], 5: [] };

  constructor() { }

  ngOnInit() {
  }

  addGoal() {
    this.showAddGoal = false;
  }

  reciverGoal(goal: Goal) {
    this.goals[goal.period].push(goal);
    this.goalsEmiter.emit(this.goals);
  }

}
