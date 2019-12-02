import { NgModule } from '@angular/core';
import { CanActivate, RouterModule, Routes } from '@angular/router';

import { NotAuthGuard } from './core/guards/not-auth.guard';

const routes: Routes = [

  { path: '', loadChildren: './home/home.module#HomeModule' },

  { path: 'login',
    loadChildren: './login/login.module#LoginModule',
    canActivate: [ NotAuthGuard ],
    canActivateChild: [ NotAuthGuard ],
    canLoad: [ NotAuthGuard ]
  },
  { path: '**', redirectTo: '' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
