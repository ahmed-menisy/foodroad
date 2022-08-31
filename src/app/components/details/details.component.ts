import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  constructor(
    private _DataService: DataService,
    private _ActivatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  curentId: number = 0;
  foodDataList: any = ''
  isLoading: boolean = false;
  ngOnInit(): void {
   this.router.routeReuseStrategy.shouldReuseRoute = ()=>false;
    this.curentId = this._ActivatedRoute.snapshot.params['id'];
    this.getFoodDataId();
  }

  getFoodDataId(): void {
    this.isLoading = true;
    this._DataService.foodDataId(this.curentId).subscribe({
      next: (response) => {
        this.foodDataList = response.recipe;
        // console.log(response.recipe);
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }
}
