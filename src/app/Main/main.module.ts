import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './/main-routing.module';
import { Route, Router } from '@angular/router';
// import { HomeComponent } from '../HEAD/home/home.component'; 


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    MainRoutingModule,
    Router
  ]
})
export class MainModule { }
