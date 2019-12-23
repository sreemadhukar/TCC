import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { JobRegistrationComponent } from '../Auth/job-registration/job-registration.component';
import { HomeComponent } from '../HEAD/home/home.component'; 
import { LoginComponent } from '../Auth/login/login.component';
import { InternalComponent } from '../components/internal/internal/internal.component'
import { AuthGuard } from '../Auth/auth.guard';

 const routes: Routes  =[
   {path:'jobregistration',component:JobRegistrationComponent,  canActivate: [AuthGuard]},
   {path:'',component:HomeComponent,  canActivate: [AuthGuard] },
   {path:'internal',component:InternalComponent},
   {path:'login',component:LoginComponent},
   {path:'**',component:HomeComponent}
  ] 



  @NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
 exports:[RouterModule]
})
export class MainRoutingModule { }
