import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-goal',
  templateUrl: './input-goal.component.html',
  styleUrls: ['./input-goal.component.scss']
})
export class InputGoalComponent implements OnInit {

  goalForm = new FormGroup({
    period: new FormControl('', [Validators.required]),
  });

  period = [
    {text: 'Próximos 3 meses'},
    {text: 'Próximos 6 meses'},
    {text: 'Daqui 1 ano'},
    {text: 'Daqui 2 anos'},
    {text: 'Daqui 3 anos'},
  ];


  constructor() { }

  ngOnInit() {
  }

}
