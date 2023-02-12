import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaPrincipalComponent } from './pages/pagina-principal/pagina-principal.component';

import localeEs from '@angular/common/locales/es'
import {registerLocaleData} from '@angular/common'
import { FormsModule } from '@angular/forms';
registerLocaleData(localeEs, 'es')

@NgModule({
  declarations: [
    AppComponent,
    PaginaPrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
