import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { CurrencyExchangeComponent } from './currency-exchange.component';
import { CurrencyExchangeService } from './currency-exchange.service';
import { FakeCurrencyExchangeService } from '../../../testing/fakes.spec';

describe('CurrencyExchangeComponent', () => {
  let component: CurrencyExchangeComponent;
  let fixture: ComponentFixture<CurrencyExchangeComponent>;
  let currencyExchangeService: CurrencyExchangeService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        SharedModule
      ],
      providers: [
        { provide: CurrencyExchangeService, useClass: FakeCurrencyExchangeService },
      ],
      declarations: [ CurrencyExchangeComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    currencyExchangeService = TestBed.get(CurrencyExchangeService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
