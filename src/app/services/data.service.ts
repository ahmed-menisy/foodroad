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
  quetions: any[] = [
    {
      title: ' How Long My Order Delivery? ',
      text: ` Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
    diam nonumy eirmod tempor invidunt ut labore et dolore magna
    aliquyam erat, sed diam.`,
    },
    {
      title: ' What Kind Payment Available?',
      text: ` Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
    diam nonumy eirmod tempor invidunt ut labore et dolore magna
    aliquyam erat, sed diam.`,
    },
    {
      title: ' Can I Order For Someone?',
      text: ` Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
    diam nonumy eirmod tempor invidunt ut labore et dolore magna
    aliquyam erat, sed diam.`,
    },
    {
      title: ' How Long My Order Delivery?',
      text: ` Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
    diam nonumy eirmod tempor invidunt ut labore et dolore magna
    aliquyam erat, sed diam.`,
    },
    {
      title: ' What Kind Payment Available?',
      text: ` Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
    diam nonumy eirmod tempor invidunt ut labore et dolore magna
    aliquyam erat, sed diam.`,
    },
    {
      title: ' Can I Order For Someone?',
      text: ` Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
    diam nonumy eirmod tempor invidunt ut labore et dolore magna
    aliquyam erat, sed diam.`,
    },
    {
      title: ' How Long My Order Delivery?',
      text: ` Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
    diam nonumy eirmod tempor invidunt ut labore et dolore magna
    aliquyam erat, sed diam.`,
    },
    {
      title: ' What Kind Payment Available?',
      text: ` Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
    diam nonumy eirmod tempor invidunt ut labore et dolore magna
    aliquyam erat, sed diam.`,
    },
    {
      title: ' Can I Order For Someone?',
      text: ` Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
    diam nonumy eirmod tempor invidunt ut labore et dolore magna
    aliquyam erat, sed diam.`,
    },
  ];

  baseUrlGoogle: String = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants&key=AIzaSyCv1EyfR44uEhQtGhzGPGHuzc3U0c3Y5Wk`;
  //to sav fav list and shar it
  favList: Map<any, any> = new Map();
  // to shar fav and subscript
  favDataShare: BehaviorSubject<any> = new BehaviorSubject(null);

  // to get our data from js file
  get ourData(): Observable<any> {
    return this.http.get(`./assets/data.json`);
  }

  //to get parenship in folder json
  get Partnership(): Observable<any> {
    return this.http.get(`./assets/data.json`);
  }

  //to get parenship in folder json
  get countries(): Observable<any> {
    return this.http.get(`./assets/data.json`);
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

  // get location x and y in google map
  getLocation(search: String): Observable<any> {
    return this.http.get(
      `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json?address=${search}&key=AIzaSyCv1EyfR44uEhQtGhzGPGHuzc3U0c3Y5Wk`
    );
  }

  // get resturant by google map
  getResturantByLocation(x: number, y: number): Observable<any> {
    return this.http.post(
      `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants&key=AIzaSyCv1EyfR44uEhQtGhzGPGHuzc3U0c3Y5Wk&location=${x}%2C${y}`,
      {
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
        }),
      }
    );
  }

  // get resturant by google map
  getResturant(): Observable<any> {
    return this.http.post(`${this.baseUrlGoogle}`, {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      }),
    });
  }
}
/*
https://cors-anywhere.herokuapp.com/
لحل مشكلة cros
*/

// ng build --build-optimizer --output-path docs --base-href /foodroad/
