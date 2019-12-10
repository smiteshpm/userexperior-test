import { Component } from '@angular/core';
import { CountryServiceService } from './services/country-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'userexperior-test';
  countrylist: any;
  constructor( private countryList: CountryServiceService, private location: Location ) {
    this.countryList.getCountries().subscribe(res => {
      // console.log(res);
      this.countrylist = res;
    });
    // console.log(location.path());
  }

  selectCountry(event: any){

    let selectedCountry = '';
    let currentPath = this.location.path();
    selectedCountry = event.target.value;
    this.countryList.selectedCountryFn(selectedCountry);
    // console.log(event.target.value);
    // console.log(currentPath);
    
    //logic for using onchange event based on actve page
    if(currentPath == ''){
      this.countryList.getCountryDetails(selectedCountry).subscribe(res => {
        // console.log(res);
        return res;
      });
    } else if(currentPath == '/language-list'){
      this.countryList.getlanguageDetails(selectedCountry).subscribe(res =>{
        return res;
      });
    } else if(currentPath == '/currency-list'){
      this.countryList.getcurrencyDetails(selectedCountry).subscribe(res =>{
        return res;
      });
    }
  }
}
