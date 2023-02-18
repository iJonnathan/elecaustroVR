import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortalComponent } from './components/portal/portal.component';
import { Objeto3DComponent } from './components/objeto3-d/objeto3-d.component';
import { InfoTextComponent } from './components/info-text/info-text.component';
import { HomeComponent } from './components/home/home.component';
import { CuadroInformativoComponent } from './components/cuadro-informativo/cuadro-informativo.component';

@NgModule({
  declarations: [
    AppComponent,
    PortalComponent,
    Objeto3DComponent,
    InfoTextComponent,
    HomeComponent,
    CuadroInformativoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
