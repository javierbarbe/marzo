import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PrincipalComponent } from './home/principal/principal.component';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { FamiliaComponent } from './components/familia/familia.component';
import { SliderArticulosComponent } from './components/slider-articulos/slider-articulos.component';
import { SeleccionPestannaDirective } from './directives/seleccion-pestanna.directive';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    FamiliaComponent,
    SliderArticulosComponent,
    SeleccionPestannaDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PrimeNgModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
