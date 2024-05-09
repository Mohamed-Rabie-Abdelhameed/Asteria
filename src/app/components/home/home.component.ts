import { Component } from '@angular/core';
import { ServiceCardComponent } from '../service-card/service-card.component';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ServiceCardComponent, CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  services = [
    {
      title: 'Website Design & Development',
      description:
        'We craft stunning websites that not only captivate visitors but also convert them into leads or customers. Our user-centered approach ensures a seamless user experience (UX) that keeps them engaged.',
      img: 'assets/images/services/web.svg',
    },
    {
      title: 'E-commerce Development',
      description:
        "Our e-commerce development expertise goes beyond just creating a store. We'll equip you with a powerful platform featuring shopping carts, secure payment gateways, and efficient order management systems to help your business flourish online.",
      img: 'assets/images/services/ecommerce.svg',
    },
    {
      title: 'Search Engine Optimization',
      description:
        "We don't just build websites, we make them discoverable. Our SEO experts will optimize your website to rank higher in search engine results pages (SERPs) through strategic keyword research, on-page optimization, and link building strategies.",
      img: 'assets/images/services/seo.svg',
    },
  ];
}
