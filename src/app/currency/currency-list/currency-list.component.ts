import { CountryServiceService } from './../../services/country-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.scss']
})
export class CurrencyListComponent implements OnInit {

  constructor(private countryList: CountryServiceService) { }

  currencyList: any;
  nullData = true;
  validResp = false;
  ngOnInit() {
    this.countryList.countryDetails.subscribe(res => {
      // console.log(res.languages);
      if (res != null) {
        this.currencyList = res.currencies;
        this.validResp = true;
        this.nullData = false;
      } else {
        this.validResp = false;
        this.nullData = true;
      }
    });
  }

}
