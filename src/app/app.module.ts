import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompNavbarComponent } from './components/comp-navbar/comp-navbar.component';
import { HomeComponent } from './components/pages/home/home.component';
import { FechasComponent } from './components/pages/fechas/fechas.component';
import { FooterComponent } from './components/footer/footer.component';
import { BandsComponent } from './components/pages/bands/bands.component';
import { WhoComponent } from './components/pages/who/who.component';
import { AfiliarseComponent } from './components/pages/afiliarse/afiliarse.component';
import { SaltoComponent } from './components/pages/bands/salto/salto.component';

@NgModule({
  declarations: [
    AppComponent,
    CompNavbarComponent,
    HomeComponent,
    FechasComponent,
    FooterComponent,
    BandsComponent,
    WhoComponent,
    AfiliarseComponent,
    SaltoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
