import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  page: number = 1;

  quetions: any[] = [
    {
      title: '1- How Long My Order Delivery? ',
      text: ` Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
    diam nonumy eirmod tempor invidunt ut labore et dolore magna
    aliquyam erat, sed diam.`,
    },
    {
      title: '2- What Kind Payment Available?',
      text: ` Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
    diam nonumy eirmod tempor invidunt ut labore et dolore magna
    aliquyam erat, sed diam.`,
    },
    {
      title: '3- Can I Order For Someone?',
      text: ` Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
    diam nonumy eirmod tempor invidunt ut labore et dolore magna
    aliquyam erat, sed diam.`,
    },
    {
      title: '4- How Long My Order Delivery?',
      text: ` Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
    diam nonumy eirmod tempor invidunt ut labore et dolore magna
    aliquyam erat, sed diam.`,
    },
    {
      title: '5- What Kind Payment Available?',
      text: ` Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
    diam nonumy eirmod tempor invidunt ut labore et dolore magna
    aliquyam erat, sed diam.`,
    },
    {
      title: '6- Can I Order For Someone?',
      text: ` Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
    diam nonumy eirmod tempor invidunt ut labore et dolore magna
    aliquyam erat, sed diam.`,
    },
    {
      title: '7- How Long My Order Delivery?',
      text: ` Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
    diam nonumy eirmod tempor invidunt ut labore et dolore magna
    aliquyam erat, sed diam.`,
    },
    {
      title: '8- What Kind Payment Available?',
      text: ` Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
    diam nonumy eirmod tempor invidunt ut labore et dolore magna
    aliquyam erat, sed diam.`,
    },
    {
      title: '9- Can I Order For Someone?',
      text: ` Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
    diam nonumy eirmod tempor invidunt ut labore et dolore magna
    aliquyam erat, sed diam.`,
    },
  ];
  // Show question or hide
  show(e: any): void {
    const icon: Element = e.target.closest('button').querySelector('i');
    icon.classList.contains('fa-plus')
      ? icon.classList.replace('fa-plus', 'fa-minus')
      : icon.classList.replace('fa-minus', 'fa-plus');
  }
}
