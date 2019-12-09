import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryDetailsComponent } from './country-details/country-details.component';


const routes: Routes = [
  { path: '', component: CountryDetailsComponent},
  { path: 'language-list',
      loadChildren: () => import('./language/language.module').then(m => m.LanguageModule) },
  { path: 'currency-list',
  loadChildren: () => import('./currency/currency.module').then(m => m.CurrencyModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
