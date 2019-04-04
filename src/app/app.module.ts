import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { TrialComponent } from './components/trial/trial.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { APP_ROUTES } from './app.routes';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent, TrialComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpClientModule,
    // RouterModule.forRoot(APP_ROUTES, {
    //   useHash: true
    // }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
