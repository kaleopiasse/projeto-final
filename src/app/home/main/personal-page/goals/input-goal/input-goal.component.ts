import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-goal',
  templateUrl: './input-goal.component.html',
  styleUrls: ['./input-goal.component.scss']
})

export class InputGoalComponent implements OnInit {

  goalForm = new FormGroup({
    goalDescription: new FormControl('', [Validators.required]),
    period: new FormControl('', [Validators.required]),
    validator: new FormControl('', [Validators.required])
  });

  @Output() goals = new EventEmitter();

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
    this.goals.emit({
        period: this.goalForm.value.period,
        goalDescription: this.goalForm.value.goalDescription,
        validator: this.goalForm.value.validator,
        status: 'progress',
    });
  }

  cancelGoal() {

  }

}
