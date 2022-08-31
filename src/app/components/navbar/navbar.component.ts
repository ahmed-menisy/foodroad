import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
  ChangeDetectorRef
} from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private _AuthService: AuthService,
    private _Router: Router,
    private _Renderer2: Renderer2,
    private _DataService:DataService,
    private cdRef:ChangeDetectorRef,
    private ref:ElementRef
  ) {}
  @ViewChild('navRef') navRef!: ElementRef;
  favData:any;
  favNum!:number
  ngOnInit(): void {
    // when change data serveice  to get data from fav share
    this._DataService.favDataShare.subscribe(()=>{
      this.favData = this._DataService.favDataShare.getValue()
      // console.log(this.favData,'this.favData');
      this.favNum = this.favData ? this.favData.size : 0
      this.cdRef.detectChanges()
    })
  
    // change nav bar fixed
    this._Renderer2.listen(window, 'scroll', () => {
      if (scrollY > 200) {
        this._Renderer2.addClass(this.navRef.nativeElement, 'fixed-top');
        this._Renderer2.addClass(this.navRef.nativeElement, 'bg-white');
      }else {
        this._Renderer2.removeClass(this.navRef.nativeElement, 'fixed-top');
        this._Renderer2.removeClass(this.navRef.nativeElement, 'bg-white');
      }
    });
  }
  // log out function 
  logOut(): void {
    this._AuthService.logOut().subscribe({
      next: (response) => {
        if (response.message === 'success') {
          this._AuthService.userData.next(null);
          localStorage.removeItem('fuser');
          this._Router.navigate(['/login']);
        }
      },
    });
  }
  // to show cart
  show():void {
    this.ref.nativeElement.querySelector('.cart-fav').classList.toggle('show')
  }
}
