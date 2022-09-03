import {
  Component,
  ViewEncapsulation,
  OnInit,
  Input,
  OnChanges,
  ViewChild,
  ElementRef,
  Renderer2,
  ViewChildren,
  QueryList,
} from '@angular/core';

// import Swiper core and required modules
import SwiperCore, { Grid } from 'swiper';
import { DataService } from 'src/app/services/data.service';
import { SwiperComponent } from 'swiper/angular';

// import Swiper core and required modules
SwiperCore.use([Grid]);

@Component({
  selector: 'app-swiper2',
  template: `
    <div class="hstack  justify-content-between pb-5">
      <h2 class="fw-bold h4">Delicious Food For You</h2>
      <div class="hstack arrow gap-3 justify-content-end">
        <button (click)="slidePrev()">
          <img
            class="img-fluid"
            src="./assets/images/left.png"
            alt="right photo"
          />
        </button>
        <button (click)="slideNext()">
          <img
            class="img-fluid"
            src="./assets/images/right.png"
            alt="left photo"
          />
        </button>
      </div>
    </div>

    <swiper
      #swiper
      [loop]="true"
      [loopFillGroupWithBlank]="true"
      [spaceBetween]="30"
      [breakpoints]="{
        '0': {
          slidesPerView: 1,
          spaceBetween: 20
        },
        '780': {
          slidesPerView: 2,
          spaceBetween: 30
        },
        '1000': {
          slidesPerView: 3,
          spaceBetween: 40
        }
      }"
      class="mySwiper p-3"
    >
      <ng-container *ngFor="let food of foodList">
        <ng-template swiperSlide>
          <div class="card h-100 shadow">
            <!-- <i
              #heartIcon
              class="heart-icon fas fa-heart  text-danger position-absolute start-50 top-50 translate-middle"
            ></i> -->
            <div [routerLink]="['/details', food.recipe_id]" class="item-card">
              <img
                class="card-img-top"
                loading="lazy"
                [src]="food.image_url"
                [alt]="food.title"
              />
              <ul class="list-inline mb-0 mt-2">
                <li class="list-inline-item">
                  <i class="fa-solid fa-star text-warning"></i>
                </li>
                <li class="list-inline-item">
                  <i class="fa-solid fa-star text-warning"></i>
                </li>
                <li class="list-inline-item">
                  <i class="fa-solid fa-star text-warning"></i>
                </li>
                <li class="list-inline-item">
                  <i class="fa-solid fa-star text-warning"></i>
                </li>
                <li class="list-inline-item">
                  <i class="fa-solid fa-star text-warning"></i>
                </li>

                <li class="list-inline-item">
                  <span>(5.0)</span>
                </li>
              </ul>
              <div class="card-body">
                <h3 class="h6">{{ food.title.split(' ', 3).join(' ') }}...</h3>
                <span class="badge bg-success  my-2">{{ food.publisher }}</span>
                <p class="small">Consetetur sadipscing elitr, sed . . . .</p>
              </div>
            </div>
            <div class="hstack justify-content-center py-4 card-body">
              <button
                [ngClass]="{
                  'bl-re': true,
                  'bl-green': !favList.has(food.recipe_id),
                  'bl-yellow': favList.has(food.recipe_id)
                }"
                (click)="addFav(food)"
              >
                Add to Fav
              </button>
            </div>
          </div>
        </ng-template>
      </ng-container>
    </swiper>
    <div *ngIf="isLoading" class="loading">
      <i class="fas fa-spinner fa-spin fa-5x text-danger"></i>
    </div>
  `,
  styleUrls: ['./swiper2.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: { class: 'swip' },
})
export class Swiper2Component implements OnInit, OnChanges {
  constructor(
    private _DataService: DataService,
    private ref: ElementRef,
    private _Renderer2: Renderer2
  ) {}
  @Input() title!: string;
  @ViewChildren('heartIcon') heartIcon!: QueryList<any>;
  foodList: any;
  width: any;
  isLoading: boolean = false;
  favList: Map<any, any> = new Map();
  ngOnInit(): void {
    //to get data from local when start
    if (localStorage.getItem('foodFav')) {
      const favDataLocal = JSON.parse(localStorage.getItem('foodFav')!);
      this.favList = new Map(favDataLocal);
      this._DataService.favDataShare.next(this.favList);
    }
    this.foodData('pizza');
  }

  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
  slideNext() {
    this.swiper!.swiperRef.slideNext(100);
  }
  slidePrev() {
    this.swiper!.swiperRef.slidePrev(100);
  }

  ngOnChanges(changes: any): void {
    if (!changes.title.firstChange) {
      this.foodData(changes.title.currentValue);
    }
  }
  // to get data food from api
  foodData(search: string): void {
    this.isLoading = true;
    this._DataService.foodData(search).subscribe({
      next: (response) => {
        // console.log(response.recipes);
        this.foodList = response.recipes;
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }
  // to add fav food in cart
  addFav(food: any): void {
    if (!this.favList.has(food.recipe_id)) {
      this.favList.set(food.recipe_id, food);
      this.savData();
     
    }
  }
  // to save food fav to local
  savData(): void {
    const getValues = [...this.favList];
    localStorage.setItem('foodFav', JSON.stringify(getValues));
    this._DataService.favDataShare.next(this.favList);
  }
}
