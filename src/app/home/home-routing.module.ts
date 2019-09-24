import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { MainComponent } from './main/main.component';


const childRoutes: Routes = [
  { path: '', component: MainComponent }
];

const routes: Routes = [
  { path: '', component: HomeComponent, children: childRoutes }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
