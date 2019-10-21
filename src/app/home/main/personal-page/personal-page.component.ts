import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-page',
  templateUrl: './personal-page.component.html',
  styleUrls: ['./personal-page.component.scss']
})
export class PersonalPageComponent implements OnInit {

  step = 2;

  constructor() { }

  ngOnInit() {
  }

  continue() {
    switch (this.step) {
      case 1:
      case 2:
        this.step++;
        break;
      default:
        this.step--;
        break;
    }
  }

  back() {
    switch (this.step) {
      case 2:
      case 3:
        this.step--;
        break;
      default:
        this.step--;
        break;
    }
  }

}
