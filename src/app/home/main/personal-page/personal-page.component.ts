import { FormUtil } from 'src/app/core/utils';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-page',
  templateUrl: './personal-page.component.html',
  styleUrls: ['./personal-page.component.scss']
})
export class PersonalPageComponent implements OnInit {

  step = 4;
  formSelfFeedback: FormGroup;
  formSkills: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  continue() {
    switch (this.step) {
      case 1:
      case 2:
        this.step++;
        break;
      case 3:
        FormUtil.validateForm(this.formSelfFeedback);
        if (this.formSelfFeedback.invalid) {
          return;
        }
        this.step++;
        break;
      case 4:
        FormUtil.validateForm(this.formSkills);
        if (this.formSkills.invalid) {
          return;
        }
        this.step++;
        break;
      default:
        this.step++;
        break;
    }
  }

  back() {
    switch (this.step) {
      default:
        this.step--;
        break;
    }
  }

}
