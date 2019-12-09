import { Component, OnInit } from '@angular/core';
import { CountryServiceService } from './../services/country-service.service';

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
  constructor( private countryList: CountryServiceService ) {
  }

  ngOnInit() {
    this.countryList.countryDetails.subscribe(res =>{
      // console.log('res', res);
      // let countryDetails = {};
      if (res != null) {
        this.countryDetails = [
          {'key':'country-name', 'value': res.name},
          {'key':'capital', 'value': res.capital},
          {'key':'region', 'value': res.region},
          {'key':'sub-region', 'value': res.subregion},
          {'key':'population', 'value': res.population},
          {'key':'area', 'value': res.area},
          {'key':'alpha3Code', 'value': res.alpha3Code}
        ];
        // console.log(this.countryDetails);
        this.validResp = true;
        this.nullData = false;
      } else {
        this.validResp = false;
        this.nullData = true;
      }
    });
  }

}
