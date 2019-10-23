import { Component, OnInit } from '@angular/core';
import { Goal } from 'src/app/core/models';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {

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
  }

}