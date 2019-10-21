import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormUtil } from 'src/app/core/utils';

@Component({
  selector: 'app-input-goal',
  templateUrl: './input-goal.component.html',
  styleUrls: ['./input-goal.component.scss']
})

export class InputGoalComponent implements OnInit {

  goalForm = new FormGroup({
    description: new FormControl('', [Validators.required]),
    period: new FormControl('', [Validators.required]),
    validator: new FormControl('', [Validators.required])
  });

  @Output() goals = new EventEmitter();
  @Output() cancel = new EventEmitter();

  period = [
    {text: 'Próximos 3 meses', value: 1},
    {text: 'Próximos 6 meses', value: 2},
    {text: 'Daqui 1 ano', value: 3},
    {text: 'Daqui 2 anos', value: 4},
    {text: 'Daqui 3 anos', value: 5},
  ];


  constructor() { }

  ngOnInit() {
  }

  addGoal() {

    FormUtil.validateForm(this.goalForm);

    if (this.goalForm.invalid) {
      return;
    }

    this.goals.emit({
        period: this.goalForm.value.period,
        description: this.goalForm.value.description,
        validator: this.goalForm.value.validator,
        status: 'progress',
    });

    this.cancelGoal();
  }

  cancelGoal() {
    this.cancel.emit(true);
  }

}
