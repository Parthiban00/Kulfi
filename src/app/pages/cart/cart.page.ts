import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  default = 'Delivery';
  wishes = '';
  itemAmount =234;
  Charges =false;
  discount = false;
  AmountWithCharges = 345;
  deliveryPartnerFee1 = 23;
  totalAmount1 = 4354;
  coupon='';
  applied = false;
  couponPresent = false;
  couponApplied = false;
  selectedLocation = 'asdf ,sf sd ,sadfas s';

  // eslint-disable-next-line @typescript-eslint/naming-convention
  CartItemsLocal = [
    {
      _id: '233',
      RestaurantId : '2344',
      MenuId : '32432',
      MenuName : 'asdf ',
      ProductName : 'Chicken Fried RIce',
      Description : 'adfas',
      Price : 234,
      Size : '1Full',
      AvailableTime : '',
      AvailableStatus : '',
      AvailableDays : '',
      ActiveYn : true,
      DeleteYn : false,
      ItemCount : 3,
      Amount : 123,
      Offer : 234,
      OfferPrice : 543,
      Commission : '',
      Sort : '',
      OfferDescription : 'Devali offer',
      ImageUrl : '',
      ActualAmount : '',
      Category : '',
      RestaurantName : '',
      Recommended : '',
      Badge : '',
      BadgeDescription : '',
      Type : '',
      Suggestion : '',
      Customizable : '',
      CustomizableDetails : '',
    },
  ];

  constructor() {}

  ngOnInit() {}

  DecreaseItemLocalStorage(index, menuid, menuname,cartid ){

  }

  IncraseItemLocalStorage(index, menuid, menuname,cartid ){

  }
}
