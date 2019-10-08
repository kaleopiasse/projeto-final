import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-collaborators',
  templateUrl: './search-collaborators.component.html',
  styleUrls: ['./search-collaborators.component.scss']
})
export class SearchCollaboratorsComponent implements OnInit {

  users = [
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
    },
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
  ];

  constructor() { }

  ngOnInit() {
  }

}
