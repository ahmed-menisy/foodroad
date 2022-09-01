import {
  Component,
  OnInit,
  ElementRef,
  Renderer2,
  ViewChildren,
  QueryList,
  Output,
  EventEmitter,
} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-swiprer',
  templateUrl: './swiprer.component.html',
  styleUrls: ['./swiprer.component.scss'],
})
export class SwiprerComponent implements OnInit {
  constructor(private _DataService: DataService, private render: Renderer2) {}
  @ViewChildren('item') item!: QueryList<any>;
  @Output() titleData:EventEmitter<string> = new EventEmitter<string>()
  ourFood: any = [];
  ngOnInit(): void {
    this.ourData();
  }

  ourData(): void {
    this._DataService.ourData.subscribe({
      next: (response) => {
        this.ourFood = response.our;
        // console.log(this.ourFood);
      },
    });
  }

  check(e: any,title:string): void {
    this.titleData.emit(title)
    const parent: Element = e.target.closest('.item');
    this.item.forEach((item: ElementRef) => {
      this.render.removeClass(item.nativeElement, 'active');
    });
    parent.classList.add('active');
  }

  customOptions: OwlOptions = {
    loop: true,
    margin: 20,
    mouseDrag: false,
    touchDrag: false,
    autoWidth:true,
    dots:false,
    navSpeed: 700,
    nav:true,
    navText:[` <img
    class="img-fluid"
    src="./assets/images/left.png"
    alt="right photo"
  />`,`<img
  class="img-fluid"
  src="./assets/images/right.png"
  alt="left photo"
/>`],
    responsive: {
      0: {
        items: 2,
        
      },
      400: {
        items: 3,
      },
      740: {
        items: 5,
      },
      940: {
        items: 6,
      },
    },
  };
}
