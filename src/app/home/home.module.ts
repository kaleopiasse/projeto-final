import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main/main.component';
import { TeamPanelComponent } from './main/team-panel/team-panel.component';
import { PersonalPageComponent } from './main/personal-page/personal-page.component';
import { SearchCollaboratorsComponent } from './main/search-collaborators/search-collaborators.component';
import { PersonalCardComponent } from './main/personal-page/personal-card/personal-card.component';
import { GoalsComponent } from './main/personal-page/goals/goals.component';
import { InputGoalComponent } from './main/personal-page/goals/input-goal/input-goal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListGoalsComponent } from './main/personal-page/goals/list-goals/list-goals.component';
import { SelfFeedbackComponent } from './main/personal-page/self-feedback/self-feedback.component';
import { InputSelfFeedbackComponent } from './main/personal-page/self-feedback/input-self-feedback/input-self-feedback.component';


@NgModule({
  declarations: [
    HomeComponent,
    MainComponent,
    TeamPanelComponent,
    PersonalPageComponent,
    SearchCollaboratorsComponent,
    PersonalCardComponent,
    GoalsComponent,
    InputGoalComponent,
    ListGoalsComponent,
    SelfFeedbackComponent,
    InputSelfFeedbackComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
