import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { JobRegistrationComponent } from '../job-registration/job-registration.component';
import { HomeComponent } from '../HEAD/home/home.component'; 
import { LoginComponent } from '../login/login.component';

 const routes: Routes  =[{path:'jobregistration',component:JobRegistrationComponent},{path:'',component:HomeComponent},{path:'login',component:LoginComponent},{path:'**',component:HomeComponent}] 



  @NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
 exports:[RouterModule]
})
export class MainRoutingModule { }
