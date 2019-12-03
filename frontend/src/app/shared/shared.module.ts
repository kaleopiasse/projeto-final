import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
    MatAutocompleteModule, MatButtonModule, MatCardModule, MatDatepickerModule, MatExpansionModule,
    MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatNativeDateModule,
    MatSelectModule, MatTableModule
} from '@angular/material';
import { RouterModule } from '@angular/router';

import { components } from './components';

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
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
    ...components,
  ]
})
export class SharedModule { }
