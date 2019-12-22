import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';

// import { indiaMap} from '../assets/Jsons/India.json';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public test: any;
ordersService: any;
coffeeOrders: any;
uid: any;
  constructor(public Auth: AuthService ,iconRegistry: MatIconRegistry, sanitizer:DomSanitizer,private db:AngularFirestore, private router:Router) { 

    iconRegistry.addSvgIcon('poles',sanitizer.bypassSecurityTrustResourceUrl('assets/test.svg'));
    iconRegistry.addSvgIcon('trans',sanitizer.bypassSecurityTrustResourceUrl('assets/trans_logo.svg'));
    
    this.Auth.user.subscribe( value => this.test2(value));


  }

  ngOnInit() {
    console.log('test');
    this.Auth.getOrganizations().subscribe( data => {
      console.log(data);  
          }, err => {
            console.log('error');
            console.log(err.message);
          });
  }
  googleLogin(){
    this.Auth.googleLogin().then(function() {
     
 
  });
   
  }

  test2(value: any) {
    if(value) {
      this.router.navigate(['/']);
    }
  }

}
