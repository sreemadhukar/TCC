import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { AngularFireAuthModule } from '@angular/fire/auth';
import { MainRoutingModule } from './Main/main-routing.module';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon'


import { AppComponent } from './app.component';
import { MainComponent } from './Main/main/main.component';
import { HomeComponent } from './HEAD/home/home.component'; 
import { CoreModule } from './Auth/core.module';

import { HeaderComponent } from './HEAD/header/header.component';
import { FooterComponent } from './HEAD/footer/footer.component';
import { LoginComponent } from './Auth/login/login.component';
import { HeaderBarComponent } from './HEAD/header-bar/header-bar.component';
import { JobRegistrationComponent } from './Auth/job-registration/job-registration.component';
import { AllProductsComponent } from './common-components/all-products/all-products.component';
import { IndiaMapComponent } from './common-components/india-map/india-map.component';
import { environment } from './../environments/environment';
import { InternalLeftNavBarComponent } from './common-components/internal-left-nav-bar/internal-left-nav-bar.component'


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HeaderBarComponent,
    JobRegistrationComponent,
    AllProductsComponent,
    IndiaMapComponent,
    InternalLeftNavBarComponent
  ],
  imports: [
    BrowserModule,
    MainRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    CoreModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
