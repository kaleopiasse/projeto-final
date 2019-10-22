import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wheel-of-skills',
  templateUrl: './wheel-of-skills.component.html',
  styleUrls: ['./wheel-of-skills.component.scss']
})
export class WheelOfSkillsComponent implements OnInit {

  skills = [
    'Capacidade Técnica',
    'Inovação',
    'Criatividade',
    'Relacionamento Interpessoal / Comunicação',
    'Iniciativa',
    'Orientação para Resultados',
    'Trabalho em Equipe',
    'Comprometimento',
    'Receptividade a críticas',
  ];

  displayedColumns: string[] = ['skill', 'personalNote', 'goal', 'comments'];

  constructor() { }

  ngOnInit() {
  }

}
