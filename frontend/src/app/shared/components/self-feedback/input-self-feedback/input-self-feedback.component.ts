import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SelfFeedbackQuestionModel } from '../../../../core/models/self-feedbacks.model';

@Component({
  selector: 'app-input-self-feedback',
  templateUrl: './input-self-feedback.component.html',
  styleUrls: ['./input-self-feedback.component.scss']
})
export class InputSelfFeedbackComponent implements OnInit {

  @Input() questions: SelfFeedbackQuestionModel[];
  @Output() formSelfFeedback = new EventEmitter();

  formQuestions: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.formQuestions = this.formBuilder.group({});

    this.questions.forEach(item => {
      const fieldControl = this.formBuilder.control('', Validators.required);
      this.formQuestions.addControl(`${item.key}`, fieldControl);
    });

    this.formSelfFeedback.emit(this.formQuestions);
  }

}
