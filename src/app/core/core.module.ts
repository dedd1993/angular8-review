import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { NotFoundComponent } from './layouts/not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  declarations: [
    NotFoundComponent
  ],
  providers: [],
  exports: [
    NotFoundComponent
  ],
})
export class CoreModule { }
