import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(private _Renderer2: Renderer2, private ref: ElementRef) {}
  runFirst: boolean = true;
  ngOnInit(): void {
    // count number when scroll
    this._Renderer2.listen(window, 'scroll', () => {
      if (scrollY > this.bestServices.nativeElement.offsetTop - 100) {
        const span = this.ref.nativeElement.querySelectorAll('span[data-num]');

        if (this.runFirst) {
          this.runFirst = false;

          for (let i = 0; i < span.length; i++) {
            const count = setInterval(() => {
              span[i].innerHTML++;
              if (span[i].innerHTML == span[i].getAttribute('data-num')) {
                clearInterval(count);
              }
            }, 10);
          }
        }
      }
    });
  }
  @ViewChild('bestServices') bestServices!: ElementRef;
}
