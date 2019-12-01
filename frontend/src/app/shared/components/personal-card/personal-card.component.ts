import { User } from 'src/app/core/models';

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-card',
  templateUrl: './personal-card.component.html',
  styleUrls: ['./personal-card.component.scss']
})
export class PersonalCardComponent {

  @Input() userInfo: User;

}
