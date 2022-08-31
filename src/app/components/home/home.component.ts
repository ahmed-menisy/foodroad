import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from './../../services/data.service';
declare const $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private _DataService: DataService,
    private _ElementRef: ElementRef
  ) {}
  ourFood: any = [];
  PartnershipList: any = [];

  titleData!: string;
  loading: boolean = false;
  ngOnInit(): void {
    const secTop =
      this._ElementRef.nativeElement.querySelector('.simple-way').offsetTop;

    this.ourData();
    this.Partnership();
  }
  // form to send msg
  msg: FormGroup = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(25),
    ]),
    address: new FormControl(null, [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(30),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phone: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^(002)?01[0125]\d{8}$/),
    ]),
  });
  
  // our data from api
  ourData(): void {
    this._DataService.ourData.subscribe({
      next: (response) => {
        this.ourFood = response.our;
        // console.log(this.ourFood);
      },
    });
  }

  Partnership(): void {
    this._DataService.Partnership.subscribe({
      next: (response) => {
        this.PartnershipList = response.Partnership;
      },
    });
  }

  // Send Form Register
  send(e: any, msg: FormGroup): void {
    if (msg.valid) {
      e.target.submit();
      msg.reset();
    }
  }

  // show text or hide from section read more
  show(e: any) {
    e.target
      .closest('.item-part ')
      .querySelector('p')
      .classList.toggle('d-none');
  }

  // option for owl caesour
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    navSpeed: 700,
    margin: 40,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
  };
}
