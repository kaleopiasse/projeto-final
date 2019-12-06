import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CollaboratorComponent } from './collaborator.component';
import { PdiComponent } from './pdi/pdi.component';

const routes: Routes = [
  { path: '' , component: CollaboratorComponent },
  { path: 'pdi/:id', component: PdiComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollaboratorRoutingModule { }
