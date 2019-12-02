import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
    MatAutocompleteModule, MatButtonModule, MatCardModule, MatDatepickerModule, MatExpansionModule,
    MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatNativeDateModule,
    MatSelectModule, MatTableModule
} from '@angular/material';

import { HeaderComponent } from './components/header/header.component';
import {
    MovingMotivationalComponent
} from './components/moving-motivational/moving-motivational.component';
import { PersonalCardComponent } from './components/personal-card/personal-card.component';
import {
    SearchCollaboratorsComponent
} from './components/search-collaborators/search-collaborators.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MovingMotivationalComponent,
    PersonalCardComponent,
    SearchCollaboratorsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DragDropModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    MatListModule,
    MatSelectModule,
    MatTableModule,
  ],
  exports: [
    DragDropModule,
    HeaderComponent,
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    MatListModule,
    MatSelectModule,
    MatTableModule,
    MovingMotivationalComponent,
    PersonalCardComponent,
    SearchCollaboratorsComponent,
  ]
})
export class SharedModule { }
