import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Router, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private auth:AuthService,private router: Router ){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean  {
    return this.auth.user.pipe(take(1),
    map(user => {
   
      if(user) {
        console.log('test');
      console.log(user);
      return !!user.role
      }
 
    }),
    tap(loggedIn => { 
      console.log(loggedIn);
      if (!loggedIn) {
        console.log('access denied')
        this.router.navigate(['/login']);
      }
  }));
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
