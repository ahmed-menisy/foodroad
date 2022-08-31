import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-resturant',
  templateUrl: './resturant.component.html',
  styleUrls: ['./resturant.component.scss'],
})
export class ResturantComponent implements OnInit {
  constructor(private _DataService: DataService) {}
  resturantData: any = [];
  pathImg: string = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&maxheight=300&photo_reference=
  `;
  googleKey: string = `&key=AIzaSyCv1EyfR44uEhQtGhzGPGHuzc3U0c3Y5Wk`;
  ngOnInit(): void {
    this.getResturantGoogle();
  }

  getResturantGoogle(): void {
    this._DataService.getResturant().subscribe({
      next: (response) => {
        this.resturantData = response.results;
        console.log(response.results);
      },
    });
  }
}
