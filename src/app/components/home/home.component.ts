import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentSlide: number = 0;
  slides: string[] = [
    'assets/images/Banner_3_Desktop_size.png',
    'assets/images/website_banners2-01.jpg',
    'assets/images/website_banners2-03.jpg'
  ];

  products = [
    { id: 1, name: 'Fresh Vegetables', image: 'assets/images/burger1.jpg' },
    { id: 2, name: 'Organic Fruits', image: 'assets/images/burger2.jpg' },
    { id: 3, name: 'Spices', image: 'assets/images/burger3.jpg' },
    { id: 4, name: 'Nutrimix', image: 'assets/images/iconlogo.png' },
    { id: 5, name: 'Millets', image: 'assets/images/_2.jpg' }
  ];

  bestSellingProducts = [
    { id: 1, name: 'Best Selling Spices', image: 'assets/images/honey4.jpg' },
    { id: 2, name: 'Best Selling Nutrimix', image: 'assets/images/honey6.jpg' },
    { id: 3, name: 'best selling honey', image: 'assets/images/honey6.jpg' },
  ];

  ngOnInit() {
    this.startCarousel();
  }

  startCarousel() {
    setInterval(() => {
      this.nextSlide();
    }, 3000); // Change slide every 3 seconds
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }
}
