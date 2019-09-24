import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main/main.component';
import { TeamPanelComponent } from './main/team-panel/team-panel.component';


@NgModule({
  declarations: [
    HomeComponent,
    MainComponent,
    TeamPanelComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
