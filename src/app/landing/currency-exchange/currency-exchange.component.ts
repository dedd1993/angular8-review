import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-currency-exchange',
  templateUrl: './currency-exchange.component.html',
  styleUrls: ['./currency-exchange.component.scss']
})
export class CurrencyExchangeComponent implements OnInit {
  exchangeForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.setValuesFormBuilder();
  }

  private setValuesFormBuilder() {
    this.exchangeForm = new FormGroup({
      euroInput: new FormControl({ value: '', disabled: false }, Validators.compose([
        Validators.required,
        Validators.pattern(/^\d+\.?\d{0,4}$/)
      ])),
      dollarInput: new FormControl({ value: '', disabled: true })
    });
  }

  onCalculate(): void {
    const amountToExchange = Number(this.exchangeForm.get('euroInput').value);
    console.log('amountToExchange', amountToExchange);
  }

}
