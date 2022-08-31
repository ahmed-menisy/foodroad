import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor(private _AuthService: AuthService) {}
  isLogin: boolean = false;
date!:number
  ngOnInit(): void {

    this._AuthService.userData.subscribe({
      next: () => {
        if (this._AuthService.userData.getValue()) {
          this.isLogin = true;
        } else {
          this.isLogin = false;
        }
      },
    });

    this.date = new Date().getFullYear()
  }

  
}
