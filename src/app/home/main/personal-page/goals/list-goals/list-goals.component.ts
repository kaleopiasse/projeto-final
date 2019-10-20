import { Component, OnInit, Input } from '@angular/core';

interface Goal {
  goalDescription: string;
  validator: string;
  period: string;
}

@Component({
  selector: 'app-list-goals',
  templateUrl: './list-goals.component.html',
  styleUrls: ['./list-goals.component.scss']
})
export class ListGoalsComponent implements OnInit {

  @Input() goals: Goal[];

  objectKeys = Object.keys;

  period = {
    1: 'Próximos 3 meses',
    2: 'Próximos 6 meses',
    3: 'Daqui 1 ano',
    4: 'Daqui 2 anos',
    5: 'Daqui 3 anos',
  };

  constructor() { }

  ngOnInit() {
  }

}
