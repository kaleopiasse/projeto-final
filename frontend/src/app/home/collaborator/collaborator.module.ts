import { SharedModule } from 'src/app/shared/shared.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CollaboratorRoutingModule } from './collaborator-routing.module';
import { CollaboratorComponent } from './collaborator.component';

@NgModule({
  declarations: [CollaboratorComponent],
  imports: [
    CommonModule,
    SharedModule,
    CollaboratorRoutingModule
  ]
})
export class CollaboratorModule { }
