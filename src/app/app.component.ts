import { Component } from '@angular/core';
import { CountryServiceService } from './services/country-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'userexperior-test';
  countrylist: any;
  constructor( private countryList: CountryServiceService ) {
    this.countryList.getCountries().subscribe(res => {
      // console.log(res);
      this.countrylist = res;
    });
  }

  selectCountry(event: any){
    const x = 3;
    let selectedCountry = '';
    selectedCountry = event.target.value;
    this.countryList.selectedCountryFn(selectedCountry);
    console.log(event.target.value);
    this.countryList.getCountryDetails(selectedCountry).subscribe(res => {
      // console.log(res);
      return res;
    });
  }
}
