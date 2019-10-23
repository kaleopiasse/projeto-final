import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-self-feedback',
  templateUrl: './input-self-feedback.component.html',
  styleUrls: ['./input-self-feedback.component.scss']
})
export class InputSelfFeedbackComponent implements OnInit {

  @Input() questions;
  @Output() formSelfFeedback = new EventEmitter();

  formQuestions: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.formQuestions = this.formBuilder.group({});

    this.questions.forEach((item, i) => {
      const fieldControl = this.formBuilder.control('', Validators.required);
      this.formQuestions.addControl(`question${i}`, fieldControl);
    });

    this.formSelfFeedback.emit(this.formQuestions);
  }

}
