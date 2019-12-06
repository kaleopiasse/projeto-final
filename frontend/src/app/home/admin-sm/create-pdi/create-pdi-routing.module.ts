import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreatePdiComponent } from './create-pdi.component';
import { StepsPdiComponent } from './steps-pdi/steps-pdi.component';

const routes: Routes = [
  { path: '', component: CreatePdiComponent },
  { path: 'pdi/:pdi_id', component: StepsPdiComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatePdiRoutingModule { }
