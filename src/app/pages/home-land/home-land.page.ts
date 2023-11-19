import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-land',
  templateUrl: './home-land.page.html',
  styleUrls: ['./home-land.page.scss'],
})
export class HomeLandPage implements OnInit {


  liveOffersSlideOptions = {
    slidesPerView: 1.5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    autoplay:true,
  };

  productDetails: any =[{
    offer:false,
    productName: 'Chicken Fried Rice',
    description: 'by Hotel Vallavan',
    price:120,
    menuID:'asdfasfas',
    itemCount:1,
    recommended:true,
    availableStatus:true,
    imageUrl:'assets/shop.jpg'

  },
  {
    offer:false,
    productName: 'Chicken Fried Rice',
    description: 'by Hotel Vallavan',
    price:120,
    menuID:'asdfasfas',
    itemCount:0,
    recommended:true,
    availableStatus:true,
    imageUrl:'assets/shop.jpg'

  },
  {
    offer:false,
    productName: 'Chicken Fried Rice',
    description: 'by Hotel Vallavan',
    price:120,
    menuID:'asdfasfas',
    itemCount:0,
    recommended:true,
    availableStatus:true,
    imageUrl:'assets/shop.jpg'

  }];

  constructor() { }

  ngOnInit() {
  }

  handleInput(ev: any){
    console.log(ev);

  }

}
