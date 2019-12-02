import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MainComponent } from './main/main.component';
import { ActionPlanComponent } from './main/personal-page/action-plan/action-plan.component';
import { GoalsComponent } from './main/personal-page/goals/goals.component';
import { InputGoalComponent } from './main/personal-page/goals/input-goal/input-goal.component';
import { ListGoalsComponent } from './main/personal-page/goals/list-goals/list-goals.component';
import { PersonalPageComponent } from './main/personal-page/personal-page.component';
import {
    InputSelfFeedbackComponent
} from './main/personal-page/self-feedback/input-self-feedback/input-self-feedback.component';
import { SelfFeedbackComponent } from './main/personal-page/self-feedback/self-feedback.component';
import {
    WheelOfSkillsComponent
} from './main/personal-page/wheel-of-skills/wheel-of-skills.component';
import { TeamPanelComponent } from './main/team-panel/team-panel.component';

@NgModule({
  declarations: [
    HomeComponent,
    MainComponent,
    TeamPanelComponent,
    PersonalPageComponent,
    GoalsComponent,
    InputGoalComponent,
    ListGoalsComponent,
    SelfFeedbackComponent,
    InputSelfFeedbackComponent,
    WheelOfSkillsComponent,
    ActionPlanComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
