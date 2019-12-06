import { FormGroup } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-self-feedback',
  templateUrl: './self-feedback.component.html',
  styleUrls: ['./self-feedback.component.scss']
})
export class SelfFeedbackComponent implements OnInit {

  @Output() formEmiter =  new EventEmitter();

  formSelfFeedback: FormGroup;

  questions = [
    '1. Como tem sido meu desempenho técnico?',
    '2. Como tem sido meu foco em meu projeto?',
    '3. Do que me orgulho em relação ao meu trabalho em meu projeto atual?',
    '4. Como tenho utilizado meu tempo de trabalho dentro da empresa?',
    '5. Do que me arrependo em relação ao meu trabalho em meu projeto atual?',
    '6. O que posso melhorar a curto prazo e a longo prazo?',
    '7. Com que frequência busco aprimorar a forma como trabalhamos dentro da empresa?',
    '8. Como acho que minha equipe avalia meu trabalho?',
    '9. O que desejo fazer na empresa daqui 1 ano?',
  ];

  constructor() { }

  ngOnInit() {
  }

  emitForm(form: FormGroup) {
    this.formSelfFeedback = form;
    this.formEmiter.emit(this.formSelfFeedback);
  }

}
