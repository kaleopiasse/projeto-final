import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {

  showAddGoal = true;

  constructor() { }

  ngOnInit() {
  }

  addGoal() {
    this.showAddGoal = false;
  }

}
