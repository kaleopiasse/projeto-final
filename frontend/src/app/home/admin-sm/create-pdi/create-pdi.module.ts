import { SharedModule } from 'src/app/shared/shared.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CreatePdiRoutingModule } from './create-pdi-routing.module';
import { CreatePdiComponent } from './create-pdi.component';
import { StepsPdiComponent } from './steps-pdi/steps-pdi.component';

@NgModule({
  declarations: [
    CreatePdiComponent,
    StepsPdiComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CreatePdiRoutingModule
  ]
})
export class CreatePdiModule { }
