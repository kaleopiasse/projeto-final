import { SharedModule } from 'src/app/shared/shared.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminSmRoutingModule } from './admin-sm-routing.module';
import { AdminSmComponent } from './admin-sm.component';
import { CreateUserComponent } from './create-user/create-user.component';

@NgModule({
  declarations: [
    AdminSmComponent,
    CreateUserComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    AdminSmRoutingModule
  ]
})
export class AdminSmModule { }
