import { Component } from '@angular/core';

declare let particlesJS: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  images = [
    { id: 1, src: '', alt: 'Java Slide', text: 'Transform into an IT professional in 90 days<br> <br>Java | Machine Learning | SQL | Python | Linux' },
    { id: 2, src: '', alt: 'Python Slide', text: 'Training and placing freshers since 2019' },
    { id: 3, src: '', alt: 'Linux Slide', text: "Having a gap in your career? No problem, we're here to help you rejoin" },
    { id: 4, src: '', alt: 'SQL Slide', text: "Strong in tech, struggling to land job? We'll help" },
    { id: 5, src: '', alt: 'Machine Learning Slide', text: "Learn from Top Industry Experts" }
  ];
  
   customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    items: 1,
    autoplay: true,
    autoplayTimeout: 5000,
  };

  ngAfterViewInit() {
    this.invokeParticles();
  }

  invokeParticles(): void {
    particlesJS.load('particles-js', './assets/particles.json', function() {
      console.log('callback - particles-js config loaded');
    });
  }

}
