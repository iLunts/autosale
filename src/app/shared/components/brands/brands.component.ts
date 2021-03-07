import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.less']
})
export class BrandsComponent implements OnInit {
  sliderOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 100,
    autoplay: true,
    navText: ['', ''],
    nav: false,
    responsive: {
      0: {
        items: 3
      },
      400: {
        items: 3
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
  }

  brandList: any[] = [
    // {
    //   id: 1,
    //   img: './assets/img/brands/audi.png',
    //   alt: '',
    //   title: '',
    // },
    {
      id: 2,
      img: './assets/img/brands/bmw.png',
      alt: '',
      title: '',
    },
    {
      id: 3,
      img: './assets/img/brands/honda.png',
      alt: '',
      title: '',
    },
    {
      id: 4,
      img: './assets/img/brands/mercedes.png',
      alt: '',
      title: '',
    },
    {
      id: 5,
      img: './assets/img/brands/renault.png',
      alt: '',
      title: '',
    },
    {
      id: 6,
      img: './assets/img/brands/toyota.png',
      alt: '',
      title: '',
    },
    {
      id: 7,
      img: './assets/img/brands/volkswagen.png',
      alt: '',
      title: '',
    },
    {
      id: 8,
      img: './assets/img/brands/volvo.png',
      alt: '',
      title: '',
    },
    // {
    //   id: 9,
    //   img: './assets/img/brands/.png',
    //   alt: '',
    //   title: '',
    // },
    // {
    //   id: 10,
    //   img: './assets/img/brands/.png',
    //   alt: '',
    //   title: '',
    // },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
