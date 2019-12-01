import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

import { HeaderComponent } from './components/header/header.component';
import {
    MovingMotivationalComponent
} from './components/moving-motivational/moving-motivational.component';
import { PersonalCardComponent } from './components/personal-card/personal-card.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MovingMotivationalComponent,
    PersonalCardComponent,
  ],
  imports: [
    CommonModule,
    DragDropModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatTableModule,
  ],
  exports: [
    DragDropModule,
    HeaderComponent,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatTableModule,
    MovingMotivationalComponent,
    PersonalCardComponent,
  ]
})
export class SharedModule { }
