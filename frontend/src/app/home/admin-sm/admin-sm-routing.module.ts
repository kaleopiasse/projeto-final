import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminSmComponent } from './admin-sm.component';
import { CreatePdiComponent } from './create-pdi/create-pdi.component';
import { CreateUserComponent } from './create-user/create-user.component';

const routes: Routes = [
  { path: '', component: AdminSmComponent },
  { path: 'create-user', component: CreateUserComponent },
  { path: 'collaborator/:id', component: CreatePdiComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminSmRoutingModule { }
