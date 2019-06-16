import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { LandingRoutingModule } from './landing.routing.module';
import { LandingComponent } from './landing.component';
import { FooterComponent, HeaderComponent } from './layouts';

import { AboutUsComponent } from './about-us/about-us.component';
import { CurrencyExchangeComponent } from './currency-exchange/currency-exchange.component';
import { HomeComponent } from './home/home.component';
import { InsightsComponent } from './insights/insights.component';

@NgModule({
  declarations: [
    LandingComponent,
    AboutUsComponent,
    CurrencyExchangeComponent,
    HomeComponent,
    InsightsComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
