import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { interceptors } from './interceptors';
import { services } from './services/index';
import { service } from './utils';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    CommonModule,
  ],
  providers: [
    ...services,
    ...interceptors,
  ],
})
export class CoreModule { }
