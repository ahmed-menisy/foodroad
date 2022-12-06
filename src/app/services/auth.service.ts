import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private _Router: Router) {
    this.saveUserData();
  }

  userData: BehaviorSubject<any> = new BehaviorSubject(null);
  baseUrl: String = `https://sticky-note-fe.vercel.app/`;
  encodeToken!: string | null;

  registerForm(formData: Object): Observable<any> {
    return this.http.post(this.baseUrl + 'signup', formData);
  }

  loginForm(formData: Object): Observable<any> {
    return this.http.post(this.baseUrl + 'signin', formData);
  }

  logOut(): Observable<any> {
    return this.http.post(this.baseUrl + 'signOut', {
      token: this.encodeToken,
    });
  }

  saveUserData(): void {
    this.encodeToken = localStorage.getItem('fuser');
    if (this.encodeToken) {
      const decodeToken: object = jwtDecode(this.encodeToken);
      this.userData.next(decodeToken);
    }
  }
}
