import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-self-feedback',
  templateUrl: './input-self-feedback.component.html',
  styleUrls: ['./input-self-feedback.component.scss']
})
export class InputSelfFeedbackComponent implements OnInit {

  @Input() questions;

  formQuestions: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.formQuestions = this.formBuilder.group({});

    this.questions.forEach((item, i) => {
      const fieldControl = this.formBuilder.control('');
      this.formQuestions.addControl(`question${i}`, fieldControl);
    });

    console.log(this.formQuestions);
  }

}
