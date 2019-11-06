import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moving-motivational',
  templateUrl: './moving-motivational.component.html',
  styleUrls: ['./moving-motivational.component.scss']
})
export class MovingMotivationalComponent implements OnInit {

  cardsinfo = [
    {
      text: 'META',
      icon: 'fas fa-bullseye-arrow',
    },
    {
      text: 'HONRA',
      icon: 'fas fa-award',
    },
    {
      text: 'RELAÇÃO',
      icon: 'fas fa-users',
    },
    {
      text: 'CURIOSIDADE',
      icon: 'fas fa-search-plus',
    },
    {
      text: 'MAESTRIA',
      icon: 'fas fa-chess',
    },
    {
      text: 'ORDEM',
      icon: 'fas fa-sort',
    },
    {
      text: 'ACEITAÇÃO',
      icon: 'fas fa-laugh',
    },
    {
      text: 'STATUS',
      icon: 'fas fa-star',
    },
    {
      text: 'PODER',
      icon: 'fas fa-dumbbell',
    },
    {
      text: 'LEALDADE',
      icon: 'fas fa-user-friends',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
