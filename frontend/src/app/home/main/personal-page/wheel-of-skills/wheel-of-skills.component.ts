import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-wheel-of-skills',
  templateUrl: './wheel-of-skills.component.html',
  styleUrls: ['./wheel-of-skills.component.scss']
})
export class WheelOfSkillsComponent implements OnInit {

  @Output() formSkillsEmitter = new EventEmitter();

  formSkills: FormGroup;

  skills = [
  { text: 'Capacidade Técnica', number: 0 },
  { text: 'Inovação', number: 1 },
  { text: 'Criatividade', number: 2 },
  { text: 'Relacionamento Interpessoal / Comunicação', number: 3 },
  { text: 'Iniciativa', number: 4 },
  { text: 'Orientação para Resultados', number: 5 },
  { text: 'Trabalho em Equipe', number: 6 },
  { text: 'Comprometimento', number: 7 },
  { text: 'Receptividade a críticas', number: 8 },
  ];

  displayedColumns: string[] = ['skill', 'personalNote', 'goal', 'comments'];

  constructor(
    private readonly formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.formSkills = this.formBuilder.group({});

    this.skills.forEach((item, i) => {
      const fieldControl = this.formBuilder.control('', Validators.required);
      this.formSkills.addControl(`personalNote${i}`, fieldControl);
      const fieldControl1 = this.formBuilder.control('', Validators.required);
      this.formSkills.addControl(`goal${i}`, fieldControl1);
      const fieldControl2 = this.formBuilder.control('');
      this.formSkills.addControl(`comment${i}`, fieldControl2);

    });

    this.formSkillsEmitter.emit(this.formSkills);

  }

}
