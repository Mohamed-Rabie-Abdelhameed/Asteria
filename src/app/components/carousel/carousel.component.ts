import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [SlickCarouselModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
})
export class CarouselComponent {
  slides = [
    { img: 'assets/images/carousel/slide3.webp' },
    { img: 'assets/images/carousel/slide1.webp' },
    { img: 'assets/images/carousel/slide2.webp' },
    { img: 'assets/images/carousel/slide4.webp' },
  ];
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    arrows: false,
  };
}
