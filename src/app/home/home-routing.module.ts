import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { MainComponent } from './main/main.component';
import { PersonalPageComponent } from './main/personal-page/personal-page.component';


const childRoutes: Routes = [
  { path: '', component: MainComponent },

  { path: 'personal/:id', component: PersonalPageComponent },
];

const routes: Routes = [
  { path: '', component: HomeComponent, children: childRoutes },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
