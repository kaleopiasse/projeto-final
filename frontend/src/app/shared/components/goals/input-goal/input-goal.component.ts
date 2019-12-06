import { tap } from 'rxjs/operators';
import { StatusOrPeriodModel } from 'src/app/core/models';
import { FormUtil } from 'src/app/core/utils';

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-input-goal',
  templateUrl: './input-goal.component.html',
  styleUrls: ['./input-goal.component.scss']
})

export class InputGoalComponent implements OnInit {

  @Input() periods: StatusOrPeriodModel[];

  @Output() goals = new EventEmitter();
  @Output() cancel = new EventEmitter();

  pdiId: string;

  goalForm = new FormGroup({
    description: new FormControl('', [Validators.required]),
    period: new FormControl('', [Validators.required]),
    validator: new FormControl('', [Validators.required])
  });

  constructor(
    private readonly activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(res => this.pdiId = res.pdi_id);
  }

  addGoal() {

    FormUtil.validateForm(this.goalForm);

    if (this.goalForm.invalid) {
      return;
    }

    this.goals.emit({
        period_id: this.goalForm.value.period,
        description: this.goalForm.value.description,
        validator: this.goalForm.value.validator,
        status: 'progress',
        key: this.periods.find( item => item._id === this.goalForm.value.period).key,
        pdi_id: this.pdiId
    });

    this.cancelGoal();
  }

  cancelGoal() {
    this.cancel.emit(true);
  }

}
