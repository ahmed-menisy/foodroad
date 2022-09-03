import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-resturant',
  templateUrl: './resturant.component.html',
  styleUrls: ['./resturant.component.scss'],
})
export class ResturantComponent implements OnInit {
  constructor(private _DataService: DataService) {}

  resturantData: any[] = [];
  page = 1;
  pathImg: string = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&maxheight=300&photo_reference=
  `;
  isLoading: boolean = false;
  countries: any[] = [];
  googleKey: string = `&key=AIzaSyCv1EyfR44uEhQtGhzGPGHuzc3U0c3Y5Wk`;
  isError: boolean = true;
  ngOnInit(): void {
    this.getCountries();
    this.getResturantGoogle();
  }

  //get countires name  from json file then get data
  getCountries(): void {
    this._DataService.countries.subscribe({
      next: (response) => {
        this.countries = response.countries;
      },
      error(err: Error) {
        console.log(err);
      },
    });
  }

  //get location search text
  getLocation(e: any): void {
    this.page = 1;
    if (e.target.value.length > 0) {
      this.isLoading = true;
      this.isError = true;
      this._DataService.getLocation(e.target.value).subscribe({
        next: (response) => {
          console.log(response.status);

          if (response.status == 'OK') {
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 1000,
              timerProgressBar: true,
            });
            Toast.fire({
              icon: 'success',
              title: `${response.status}`,
            });
            const locationXandY = response.results.at(0).geometry.location;
            // send location to api
            this._DataService
              .getResturantByLocation(locationXandY.lat, locationXandY.lng)
              .subscribe({
                next: (response) => {
                  this.resturantData = response.results;
                },
                error(err: Error) {
                  console.log(err);
                },
                complete: () => {
                  this.isLoading = false;
                },
              });
          } else {
            this.isLoading = false;
            // sweat alert
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 1000,
              timerProgressBar: true,
            });
            Toast.fire({
              icon: 'error',
              title: `${response.status}`,
            });
          }
        },
        error:(err: Error)=> {
          console.log(err);
          this.isError = false;
        },
      });
    }
  }

  // get resturant google
  getResturantGoogle(): void {
    this.isError = true;
    this.isLoading = true;
    this._DataService.getResturant().subscribe({
      next: (response) => {
        this.resturantData = response.results;
        console.log(response.results);
      },
      error: (err: Error) => {
        console.log(err);
        this.isError = false;
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }
}
