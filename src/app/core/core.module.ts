import {LOCALE_ID, NgModule} from '@angular/core';
import {CommonModule, registerLocaleData} from '@angular/common';
import {httpInterceptorProviders} from "./interceptors";
import * as fr from "@angular/common/locales/fr";
import {HeaderComponent} from "./components/header/header.component";
import { RouterModule} from "@angular/router";

//Vous pouvez donc vous contenter de déplacer les dossiers  models  et  services  dans le dossier  core

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'},
    httpInterceptorProviders
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
