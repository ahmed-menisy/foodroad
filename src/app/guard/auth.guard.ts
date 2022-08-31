import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _AuthService:AuthService , private _Router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     return this._AuthService.userData.getValue() ? true:( this._Router.navigate(['/login']) ,false)
   
  }
  
}
@Injectable({providedIn: 'root'})
export class AuthGuardLogin implements CanActivate {
  constructor(private _AuthService:AuthService , private _Router:Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this._AuthService.userData.getValue() ? ( this._Router.navigate(['/home']) ,false):true
  }
}