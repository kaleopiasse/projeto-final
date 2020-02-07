import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../core/guards/auth.guard';
import { HomeComponent } from './home.component';

const childRoutes: Routes = [
  { path: '', loadChildren: './admin-sm/admin-sm.module#AdminSmModule' },
  { path: 'user-collaborator/:id', loadChildren: './collaborator/collaborator.module#CollaboratorModule' },
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
