import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  show(e: any): void {
    const icon: Element = e.target.closest('button').querySelector('i');
    icon.classList.contains('fa-plus')
      ? icon.classList.replace('fa-plus', 'fa-minus')
      : icon.classList.replace('fa-minus','fa-plus',);
  }
}
