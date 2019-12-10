import { Component, OnInit } from '@angular/core';
import { CountryServiceService } from '../../services/country-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrls: ['./language-list.component.scss']
})
export class LanguageListComponent implements OnInit {

  constructor(private countryList: CountryServiceService) { }

  languageList: any;
  selectedCountry: any;
  nullData = true;
  validResp = false;
  private lsubscriber1: Subscription = Subscription.EMPTY;
  private lsubscriber2: Subscription = Subscription.EMPTY;
  // lsubscriber1: any;
  // lsubscriber2: any;
  ngOnInit() {

    this.lsubscriber1 = this.countryList.selectedCountry.subscribe(res => {
      this.selectedCountry = res;

      if(this.selectedCountry != null){
        this.lsubscriber2 = this.countryList.getlanguageDetails(this.selectedCountry).subscribe(res =>{
          console.log(res);
           // console.log(res.languages);
          if (res != null) {
            this.languageList = res;
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

  ngOnDestroy(){
    this.lsubscriber2.unsubscribe();
    this.lsubscriber1.unsubscribe();
  }

}
