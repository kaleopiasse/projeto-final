import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-goals',
  templateUrl: './list-goals.component.html',
  styleUrls: ['./list-goals.component.scss']
})
export class ListGoalsComponent implements OnInit {

  teams = [
    {
      teamName: 'Time 1',
      members: [
        {
          name: 'Kaleo Aparecido Piasse',
          lastAvaliation: '24/05/2019'
        },
        {
          name: 'Nome Sobrenome 1',
          lastAvaliation: '24/02/2019'
        },
        {
          name: 'Nome Sobrenome 2',
          lastAvaliation: '24/03/2019'
        },
        {
          name: 'Nome Sobrenome 3',
          lastAvaliation: '14/05/2019'
        }
      ]
    },
    {
      teamName: 'Time 2',
      members: [
        {
          name: 'Nome Sobrenome 4',
          lastAvaliation: '15/01/2019'
        },
        {
          name: 'Nome Sobrenome 5',
          lastAvaliation: '17/09/2019'
        },
        {
          name: 'Nome Sobrenome 6',
          lastAvaliation: '31/09/2019'
        },
        {
          name: 'Nome Sobrenome 7',
          lastAvaliation: '10/10/2019'
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
