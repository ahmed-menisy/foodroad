import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
    meassage: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(100),
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
