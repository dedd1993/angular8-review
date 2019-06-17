import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CurrencyExchangeService {

  constructor(private http: HttpClient) { }

  getEuroEquivalent(amount: number): Observable<number> {
    let params = new HttpParams();
    params = params.append('access_key', environment.currencyExchange.access_key);

    return this.http
      .get(environment.currencyExchange.api, { params })
      .pipe(
        map((response: any): number => {
          const cambio: number = response.rates.USD;
          return Number(Number(amount * cambio).toFixed(4));
        })
      );
  }
}
