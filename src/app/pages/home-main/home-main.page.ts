import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.page.html',
  styleUrls: ['./home-main.page.scss'],
})
export class HomeMainPage implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    autoplay:true
  };
  // slideOpts_ = {
  //   initialSlide: 1,
  //   speed: 400,

  // };
  constructor(public router:Router) { }

  ngOnInit() {
  }

  goToHome(category:any){
    this.router.navigate(
      ['/home'],
      { queryParams: { category:category } }
    );

  }

}
