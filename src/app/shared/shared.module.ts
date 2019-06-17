import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [],
  providers: [DecimalPipe],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  entryComponents: []
})
export class SharedModule { }
