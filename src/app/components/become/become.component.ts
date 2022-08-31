import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-become',
  templateUrl: './become.component.html',
  styleUrls: ['./become.component.scss'],
})
export class BecomeComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

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

  // Send Form Register
  send(e: any, msg: FormGroup): void {
    if (msg.valid) {
      e.target.submit();
      msg.reset();
    }
  }
}
