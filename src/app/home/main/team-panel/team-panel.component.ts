import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-team-panel',
  templateUrl: './team-panel.component.html',
  styleUrls: ['./team-panel.component.scss']
})
export class TeamPanelComponent implements OnInit {

  @Input() teams: any;

  constructor() { }

  ngOnInit() {
  }

}
