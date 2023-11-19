import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { MenusPopoverPage } from 'src/app/shared/popover/menus-popover/menus-popover.page';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {
  productDetails: any = [
    {
      mainCategory: 'Recommended',
      items: [
        {
          offer: false,
          productName: 'Chicken Fried Rice',
          description: 'by Hotel Vallavan',
          price: 120,
          menuID: 'asdfasfas',
          itemCount: 1,
          recommended: true,
          availableStatus: true,
          imageUrl: 'assets/shop.jpg',
          type: 'egg',
          tag:'Bestseller'
        },
        {
          offer: false,
          productName: 'Chicken Fried Rice',
          description: 'by Hotel Vallavan',
          price: 120,
          menuID: 'asdfasfas',
          itemCount: 0,
          recommended: true,
          availableStatus: true,
          imageUrl: 'assets/shop.jpg',
          type: 'non-veg',
          tag:'Trending'
        },
        {
          offer: false,
          productName: 'Chicken Fried Rice',
          description: 'by Hotel Vallavan',
          price: 120,
          menuID: 'asdfasfas',
          itemCount: 0,
          recommended: true,
          availableStatus: true,
          imageUrl: 'assets/shop.jpg',
          type: 'veg',
        },
      ],
    },
    {
      mainCategory: 'Main Course',
      items: [
        {
          offer: false,
          productName: 'Chicken Fried Rice',
          description: 'by Hotel Vallavan',
          price: 120,
          menuID: 'asdfasfas',
          itemCount: 1,
          recommended: true,
          availableStatus: true,
          imageUrl: 'assets/shop.jpg',
          type: 'egg',
        },
        {
          offer: false,
          productName: 'Chicken Fried Rice',
          description: 'by Hotel Vallavan',
          price: 120,
          menuID: 'asdfasfas',
          itemCount: 0,
          recommended: true,
          availableStatus: true,
          imageUrl: 'assets/shop.jpg',
          type: 'non-veg',
        },
        {
          offer: false,
          productName: 'Chicken Fried Rice',
          description: 'by Hotel Vallavan',
          price: 120,
          menuID: 'asdfasfas',
          itemCount: 0,
          recommended: true,
          availableStatus: true,
          imageUrl: 'assets/shop.jpg',
          type: 'veg',
        },
      ],
    },
  ];

  mainMenu = [
    {
      _id: '1',
      restaurantID: '2',
      menuName: 'Chicken Rice',
      availableTime: '',
      availableStatus: true,
      availableDays: '',
      activeYn: true,
      deleteYn: false,
      viewType: '',
    },
  ];
  constructor(public popoverController: PopoverController) {}

  ngOnInit() {}

  async presentPopover(ev: any) {
    console.log('present popover entered ');
    const popover = await this.popoverController.create({
      component: MenusPopoverPage,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true,
      componentProps: this.mainMenu,
    });

    popover.onDidDismiss().then((data: any) => {
      console.log('from popover data  ' + data.data.fromPopover);
      // this.scrollFn(data.data.fromPopover);
      // this.menu = data.data.fromPopover;
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
