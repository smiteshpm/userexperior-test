import { Component, OnInit } from '@angular/core';
import { CountryServiceService } from './../services/country-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {
  countrylist: any;
  countryDetails: any;
  nullData = true;
  validResp = false;
  private subscriber1: Subscription = Subscription.EMPTY;
  private subscriber2: Subscription = Subscription.EMPTY;
  // subscriber1: any;
  // subscriber2: any;
  selectedCountry: any;
  constructor( private countryList: CountryServiceService ) {
  }

  ngOnInit() {

    this.subscriber1 = this.countryList.selectedCountry.subscribe(res => {
      this.selectedCountry = res;

      if(this.selectedCountry != null){
        this.subscriber2 = this.countryList.getCountryDetails(this.selectedCountry).subscribe(res =>{
          if (res != null) {
            this.countryDetails = [
              {'key':'Country Name', 'value': res.name},
              {'key':'Capital', 'value': res.capital},
              {'key':'Region', 'value': res.region},
              {'key':'Sub Region', 'value': res.subregion},
              {'key':'Population', 'value': res.population},
              {'key':'Area', 'value': res.area},
              {'key':'Alpha3Code', 'value': res.alpha3Code}
            ];
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
    this.subscriber2.unsubscribe();
    this.subscriber1.unsubscribe();
  }

}
