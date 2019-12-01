import { SharedModule } from 'src/app/shared/shared.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdminSmRoutingModule } from './admin-sm-routing.module';
import { AdminSmComponent } from './admin-sm.component';

@NgModule({
  declarations: [
    AdminSmComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminSmRoutingModule
  ]
})
export class AdminSmModule { }
