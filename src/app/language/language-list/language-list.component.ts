import { Component, OnInit } from '@angular/core';
import { CountryServiceService } from '../../services/country-service.service';

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrls: ['./language-list.component.scss']
})
export class LanguageListComponent implements OnInit {

  constructor(private countryList: CountryServiceService) { }

  languageList: any;
  nullData = true;
  validResp = false;
  ngOnInit() {
    
    this.countryList.countryDetails.subscribe(res =>{
      // console.log(res.languages);
      if (res != null) {
        this.languageList = res.languages;
        this.validResp = true;
        this.nullData = false;
      } else {
        this.validResp = false;
        this.nullData = true;
      }
    });
  }

}
