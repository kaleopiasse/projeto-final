import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-self-feedback',
  templateUrl: './input-self-feedback.component.html',
  styleUrls: ['./input-self-feedback.component.scss']
})
export class InputSelfFeedbackComponent implements OnInit {

  @Input() questions;

  constructor() { }

  ngOnInit() {
  }

}
