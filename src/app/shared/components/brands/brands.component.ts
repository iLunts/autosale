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
        items: 4
      },
      740: {
        items: 5
      },
      940: {
        items: 6
      }
    },
  }

  brandList: any[] = [
    {
      id: 1,
      img: './assets/svg/brands/audi.svg',
      alt: '',
      title: '',
    },
    {
      id: 2,
      img: './assets/svg/brands/bmw.svg',
      alt: '',
      title: '',
    },
    {
      id: 3,
      img: './assets/svg/brands/honda.svg',
      alt: '',
      title: '',
    },
    {
      id: 4,
      img: './assets/svg/brands/mercedes.svg',
      alt: '',
      title: '',
    },
    {
      id: 5,
      img: './assets/svg/brands/renault.svg',
      alt: '',
      title: '',
    },
    {
      id: 6,
      img: './assets/svg/brands/toyota.svg',
      alt: '',
      title: '',
    },
    {
      id: 7,
      img: './assets/svg/brands/volkswagen.svg',
      alt: '',
      title: '',
    },
    {
      id: 8,
      img: './assets/svg/brands/volvo.svg',
      alt: '',
      title: '',
    },
    // {
    //   id: 9,
    //   img: './assets/svg/brands/.svg',
    //   alt: '',
    //   title: '',
    // },
    // {
    //   id: 10,
    //   img: './assets/svg/brands/.svg',
    //   alt: '',
    //   title: '',
    // },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
