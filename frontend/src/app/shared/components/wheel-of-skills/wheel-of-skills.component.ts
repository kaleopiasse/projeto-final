import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { WheelOfSkillsSkillModel } from '../../../core/models/wheel-of-skills.model';

@Component({
  selector: 'app-wheel-of-skills',
  templateUrl: './wheel-of-skills.component.html',
  styleUrls: ['./wheel-of-skills.component.scss']
})
export class WheelOfSkillsComponent implements OnInit {

  @Output() formSkillsEmitter = new EventEmitter();
  @Output() jsonSkillsEmitter = new EventEmitter();

  formSkills: FormGroup;

  skills: WheelOfSkillsSkillModel[] = [
  { description: 'Capacidade Técnica', key: 1, personalNote: 0, objective: 0, comments: '' },
  { description: 'Inovação', key: 2, personalNote: 0, objective: 0, comments: ''},
  { description: 'Criatividade', key: 3, personalNote: 0, objective: 0, comments: ''},
  { description: 'Relacionamento Interpessoal / Comunicação', key: 4, personalNote: 0, objective: 0, comments: '' },
  { description: 'Iniciativa', key: 5, personalNote: 0, objective: 0, comments: '' },
  // { description: 'Orientação para Resultados', key: 6, personalNote: 0, objective: 0, comments: '' },
  // { description: 'Trabalho em Equipe', key: 7, personalNote: 0, objective: 0, comments: '' },
  // { description: 'Comprometimento', key: 8, personalNote: 0, objective: 0, comments: '' },
  // { description: 'Receptividade a críticas', key: 9, personalNote: 0, objective: 0, comments: '' },
  ];

  displayedColumns: string[] = ['skill', 'personalNote', 'goal', 'comments'];

  constructor(
    private readonly formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.formSkills = this.formBuilder.group({});

    this.skills.forEach( item => {
      const fieldControl = this.formBuilder.control('', Validators.required);
      this.formSkills.addControl(`personalNote${item.key}`, fieldControl);
      const fieldControl1 = this.formBuilder.control('', Validators.required);
      this.formSkills.addControl(`goal${item.key}`, fieldControl1);
      const fieldControl2 = this.formBuilder.control('');
      this.formSkills.addControl(`comment${item.key}`, fieldControl2);

    });

    this.formSkillsEmitter.emit(this.formSkills);
    this.jsonSkillsEmitter.emit(this.skills);

  }

}
