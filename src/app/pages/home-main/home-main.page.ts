import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.page.html',
  styleUrls: ['./home-main.page.scss'],
})
export class HomeMainPage implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    autoplay: true,
  };
  // slideOpts_ = {
  //   initialSlide: 1,
  //   speed: 400,

  // };
  categories: any = [
    {
      name: 'Food',
      itemCount: 123,
    },
    {
      name: 'Beverages',
      itemCount: 123,
    },
    {
      name: 'Desserts',
      itemCount: 123,
    },
    {
      name: 'Meats',
      itemCount: 123,
    },
  ];

  liveOffersSlideOptions = {
    slidesPerView: 1.5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    autoplay: true,
  };

  constructor(public router: Router) { }

  ngOnInit() {

    const list = document.querySelectorAll('.list');
    const nav = document.querySelector('.navigation');
    list.forEach(item => item.addEventListener('click', (e: any) => {
      list.forEach(li => li.classList.remove('active'));
      e.currentTarget.classList.add('active');
      // e.currentTarget.

    }));

  }

  goToHome(category: string) {
    this.router.navigate(['/home'], { queryParams: { category } });
  }

  handleInput(ev: any) {
    console.log(ev);
  }
}
