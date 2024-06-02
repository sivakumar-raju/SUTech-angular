import { Component, ElementRef, ViewChild } from '@angular/core';

import { CountUp } from 'countup.js';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {
  @ViewChild('countUpElement', { static: true }) countUpElement!: ElementRef;
  constructor() {}

  ngAfterViewInit() {
    const options = {
      startVal: 0,
      duration: 3,
      suffix: '+  ',
      enableScrollSpy: true,
      useEasing: true
    };

    const countUp = new CountUp(this.countUpElement.nativeElement, 300 , options);
    if (!countUp.error) {
      countUp.start();
       const textDiv = document.createElement('div');
       textDiv.textContent = 'Students Got Placed';
       const nbspNode = document.createTextNode('\u00A0');
       this.countUpElement.nativeElement.parentNode.appendChild(nbspNode);
       this.countUpElement.nativeElement.parentNode.appendChild(textDiv);

    } else {
      console.error(countUp.error);
    }
  }

}
