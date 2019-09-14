import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './Main/main/main.component';
import { HomeComponent } from './HEAD/home/home.component'; 
import { MainRoutingModule } from './Main/main-routing.module';

import { HeaderComponent } from './HEAD/header/header.component';
import { FooterComponent } from './HEAD/footer/footer.component';
import { LoginComponent } from './Auth/login/login.component';
import { HeaderBarComponent } from './HEAD/header-bar/header-bar.component';
import { JobRegistrationComponent } from './Auth/job-registration/job-registration.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HeaderBarComponent,
    JobRegistrationComponent
  ],
  imports: [
    BrowserModule,
    MainRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
