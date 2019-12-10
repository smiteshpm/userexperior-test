import { CountryServiceService } from './../../services/country-service.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.scss']
})
export class CurrencyListComponent implements OnInit {

  constructor(private countryList: CountryServiceService) { }

  currencyList: any;
  selectedCountry: any;
  nullData = true;
  validResp = false;
  private csubscriber1: Subscription = Subscription.EMPTY;
  private csubscriber2: Subscription = Subscription.EMPTY;
  // csubscriber1: any;
  // csubscriber2: any;
  ngOnInit() {
    this.csubscriber1 = this.countryList.selectedCountry.subscribe(res => {
      this.selectedCountry = res;

      if(this.selectedCountry != null){
        this.csubscriber2 = this.countryList.getcurrencyDetails(this.selectedCountry).subscribe(res =>{
          console.log(res);
           // console.log(res.languages);
          if (res != null) {
            this.currencyList = res;
            this.validResp = true;
            this.nullData = false;
          }
        });
      } else {
        this.validResp = false;
        this.nullData = true;
      }
    });
  }

  //destroy subscribed observables
  ngOnDestroy(){
    this.csubscriber2.unsubscribe();
    this.csubscriber1.unsubscribe();
  }

}
