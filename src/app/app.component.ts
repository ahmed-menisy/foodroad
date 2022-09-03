import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { AuthService } from './services/auth.service';
import { DataService } from 'src/app/services/data.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private _AuthService: AuthService,
    private render: Renderer2,
    private _DataService: DataService
  ) {
     // ------------ AOS ANIMATION
     AOS.init({
      duration: 300,
      offset: 150,
    });
  }

  @ViewChild('goUp') goUp!: ElementRef;
  isLogin: boolean = false;
  secOffset: any;

  ngOnInit(): void {
   

    //------------ Scroll show go up and hidde
    this.render.listen(window, 'scroll', () => {
      if (scrollY > 400) {
        this.goUp.nativeElement.classList.remove('d-none');
      } else {
        this.goUp?.nativeElement.classList.add('d-none');
      }
    });

    //To Check if user data log in show and hide footer and header
    this._AuthService.userData.subscribe({
      next: () => {
        if (this._AuthService.userData.getValue()) {
          this.isLogin = true;
        } else {
          this.isLogin = false;
        }
      },
    });
  }

  // on activat / when active any route scroll go to top / user (active) in router-outlet
  onActivate(e: Event): void {
    scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  // to go to up when click to button
  goTop(): void {
    scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
