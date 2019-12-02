import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../core/guards/auth.guard';
import { HomeComponent } from './home.component';
import { MainComponent } from './main/main.component';
import { PersonalPageComponent } from './main/personal-page/personal-page.component';

const childRoutes: Routes = [
  { path: 'personal/:id', component: PersonalPageComponent },

  { path: '', loadChildren: './admin-sm/admin-sm.module#AdminSmModule' },

];

const routes: Routes = [
  { path: '', component: HomeComponent, children: childRoutes,
    canActivate: [ AuthGuard ],
    canLoad: [ AuthGuard ],
    canActivateChild: [ AuthGuard ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
