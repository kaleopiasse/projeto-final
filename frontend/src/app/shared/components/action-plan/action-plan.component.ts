import { WheelOfSkillsSkillModel } from 'src/app/core/models';

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-action-plan',
  templateUrl: './action-plan.component.html',
  styleUrls: ['./action-plan.component.scss']
})
export class ActionPlanComponent {

  @Input() skills: WheelOfSkillsSkillModel[];
  @Output() actionPlanEmitter = new EventEmitter();

  formActionPlan = new FormGroup({
    improve: new FormControl(),
    howToImprove: new FormControl(),
  });

  actionPlan: {
    improve: string;
    howToImprove: string;
  }[] = [];

  addHowToImprove() {
    this.actionPlan.push({
      improve:  this.skills.find(item => item.key === this.formActionPlan.controls.improve.value).description,
      howToImprove: this.formActionPlan.controls.howToImprove.value,
    });

    this.actionPlanEmitter.emit(this.actionPlan);

    this.formActionPlan.controls.howToImprove.reset();
  }

}
