import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-plan',
  templateUrl: './action-plan.component.html',
  styleUrls: ['./action-plan.component.scss']
})
export class ActionPlanComponent implements OnInit {

  formActionPlan = new FormGroup({
    improve: new FormControl(),
    howToImprove: new FormControl(),
  });

  actionPlan = {
    improve: [],
    howToImprove: [],
  };

  constructor() { }

  ngOnInit() {
  }

  addImprove() {
    if (this.formActionPlan.controls.improve.value === null) {
      return;
    }
    this.actionPlan.improve.push(this.formActionPlan.controls.improve.value);
    this.formActionPlan.controls.improve.reset();
  }

  addHowToImprove() {
    if (this.formActionPlan.controls.howToImprove.value === null) {
      return;
    }
    this.actionPlan.howToImprove.push(this.formActionPlan.controls.howToImprove.value);
    this.formActionPlan.controls.howToImprove.reset();
  }

}
