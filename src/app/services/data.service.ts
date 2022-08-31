import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient, private router: Router) {
    // when start app any page get fav item
    if (localStorage.getItem('foodFav')) {
      const favDataLocal = JSON.parse(localStorage.getItem('foodFav')!);
      this.favList = new Map(favDataLocal);
      this.favDataShare.next(this.favList);
    }
  }

  baseUrlGoogle: String = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants&key=AIzaSyCv1EyfR44uEhQtGhzGPGHuzc3U0c3Y5Wk`;
  //to sav fav list and shar it
  favList: Map<any, any> = new Map();
  // to shar fav and subscript
  favDataShare: BehaviorSubject<any> = new BehaviorSubject(null);

  // to get our data from js file
  get ourData(): Observable<any> {
    return this.http.get(`../../assets/data.json`);
  }

  //to get parenship in folder json
  get Partnership(): Observable<any> {
    return this.http.get(`../../assets/data.json`);
  }

  //to get food
  foodData(search: string): Observable<any> {
    return this.http.get(
      `https://forkify-api.herokuapp.com/api/search?q=${search}`
    );
  }

  // to det details food by id
  foodDataId(id: number): Observable<any> {
    return this.http.get(`https://forkify-api.herokuapp.com/api/get?rId=${id}`);
  }

  // get resturant by google map
  getResturant(): Observable<any> {
    return this.http.get(`${this.baseUrlGoogle}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
        Authorization: 'Bearer AIzaSyCv1EyfR44uEhQtGhzGPGHuzc3U0c3Y5Wk',
      }),
    });
  }
}
