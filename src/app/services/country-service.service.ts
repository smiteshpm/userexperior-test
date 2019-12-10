import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ApiCallServiceService } from './api-call-service.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryServiceService {

  //observales for each page data.
  private countryDetailsSrc = new BehaviorSubject(null);
  countryDetails = this.countryDetailsSrc.asObservable();

  private languageDetailsSrc = new BehaviorSubject(null);
  languageDetails = this.languageDetailsSrc.asObservable();

  private currencyDetailsSrc = new BehaviorSubject(null);
  currencyDetails = this.countryDetailsSrc.asObservable();

  private selectedCountrySrc = new BehaviorSubject(null);
  selectedCountry = this.selectedCountrySrc.asObservable();

  constructor(private apiCall: ApiCallServiceService) { }

  //api call for countries
  getCountries(): Observable<any>{
    return this.apiCall.get('rest/v2/all')
    .pipe(map(
      res => {
        return res;
        console.log(res);
      }
    ));
  }

  // api call for language data
  getlanguageDetails(country: string):Observable<any>{
    const url = 'rest/v2/alpha/' + country;

    return this.apiCall.get(url)
    .pipe(map(
      res => {
        // console.log(res);
        this.languageDetailsSrc.next(res.languages);
        return res.languages;
      }
    ));
  }

  // api call for currency data
  getcurrencyDetails(country: string):Observable<any>{
    const url = 'rest/v2/alpha/' + country;

    return this.apiCall.get(url)
    .pipe(map(
      res => {
        // console.log(res);
        this.currencyDetailsSrc.next(res.currencies);
        return res.currencies;
      }
    ));
  }

  // set selected country so that can be used by other pages/components/modules
  selectedCountryFn(country: string) {
    this.selectedCountrySrc.next(country);
  }

  // api call for country details data
  getCountryDetails(code: string): Observable<any>{
    const url = 'rest/v2/alpha/' + code;
    return this.apiCall.get(url)
    .pipe(map(
      res => {
        console.log(res);
        this.countryDetailsSrc.next(res);
        return res;
      }
    ));
  }
}
