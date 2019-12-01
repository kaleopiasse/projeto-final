import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminSmComponent } from './admin-sm.component';

const routes: Routes = [
  { path: '', component: AdminSmComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminSmRoutingModule { }
