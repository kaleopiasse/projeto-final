import { SelfFeedbackQuestionModel } from 'src/app/core/models';

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-self-feedback',
  templateUrl: './self-feedback.component.html',
  styleUrls: ['./self-feedback.component.scss']
})
export class SelfFeedbackComponent implements OnInit {

  @Output() formEmiter =  new EventEmitter();
  @Output() questionsEmiter = new EventEmitter();

  formSelfFeedback: FormGroup;

  questions: SelfFeedbackQuestionModel[] = [
    {
      key: 1,
      description: 'Como tem sido meu desempenho técnico?',
      answer: ''
    },
    {
      key: 2,
      description: 'Como tem sido meu foco em meu projeto?',
      answer: ''
    },
    {
      key: 3,
      description: 'Do que me orgulho em relação ao meu trabalho em meu projeto atual?',
      answer: ''
    },
    {
      key: 4,
      description: 'Como tenho utilizado meu tempo de trabalho dentro da empresa?',
      answer: ''
    },
    {
      key: 5,
      description: 'Do que me arrependo em relação ao meu trabalho em meu projeto atual?',

      answer: ''
    },
    {
      key: 6,
      description: 'O que posso melhorar a curto prazo e a longo prazo?',
      answer: ''
    },
    {
      key: 7,
      description: 'Com que frequência busco aprimorar a forma como trabalhamos dentro da empresa?',
      answer: ''
    },
    {
      key: 8,
      description: 'Como acho que minha equipe avalia meu trabalho?',
      answer: ''
    },
    {
      key: 9,
      description: 'O que desejo fazer na empresa daqui 1 ano?',
      answer: ''
    }
  ];

  constructor() { }

  ngOnInit() {
    this.emitQuestions();
  }

  emitForm(form: FormGroup) {
    this.formSelfFeedback = form;
    this.formEmiter.emit(this.formSelfFeedback);
  }

  emitQuestions() {
    this.questionsEmiter.emit(this.questions);
  }

}
