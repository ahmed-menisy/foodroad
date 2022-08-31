import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private _AuthService: AuthService, private _Router: Router) {}

  msgError!: String;
  isLogin: boolean = false;
  ngOnInit(): void {}

  login: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
    ]),
  });
 // to submit login to api
  submitlogin(login: FormGroup):void {
    // if data is valid 
    if (login.valid) {
      this.isLogin = true;
      this._AuthService.loginForm(login.value).subscribe({
        next: (response) => {
          if (response.message === 'success') {

            localStorage.setItem('fuser', response.token);
            
            // sweat alert 
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 2000,
              timerProgressBar: true,
              // when close sweat aleart
              willClose: () => {
                this._Router.navigate(['/home']);
                this._AuthService.saveUserData();
              },
            });
            Toast.fire({
              icon: 'success',
              title: `${response.message}`,
            });
          } else {
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3200,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer);
                toast.addEventListener('mouseleave', Swal.resumeTimer);
              },
            });
            Toast.fire({
              icon: 'error',
              title: `${response.message}`,
            });
          }
        },
        complete: () => {
          this.isLogin = false;
        },
      });
    } else {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3200,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
      });
      Toast.fire({
        icon: 'error',
        title: `Data Required`,
      });
    }
  }
}
