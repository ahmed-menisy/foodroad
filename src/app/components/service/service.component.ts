import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent implements OnInit {
  constructor(private _DataService: DataService) {}
  ngOnInit(): void {
    this.quetions = this._DataService.quetions;
  }

  page: number = 1;
  quetions: any[] = [];

  // Show question or hide
  show(e: any): void {
    const icon: Element = e.target.closest('button').querySelector('i');
    icon.classList.contains('fa-plus')
      ? icon.classList.replace('fa-plus', 'fa-minus')
      : icon.classList.replace('fa-minus', 'fa-plus');
  }
}
