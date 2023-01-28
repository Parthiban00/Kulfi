import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'location-setup',
    loadChildren: () => import('./pages/location-setup/location-setup.module').then( m => m.LocationSetupPageModule)
  },
  {
    path: 'home-main',
    loadChildren: () => import('./pages/home-main/home-main.module').then( m => m.HomeMainPageModule)
  },
  {
    path: 'menus',
    loadChildren: () => import('./pages/menus/menus.module').then( m => m.MenusPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./pages/cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./pages/payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'order-placed',
    loadChildren: () => import('./pages/order-placed/order-placed.module').then( m => m.OrderPlacedPageModule)
  },
  {
    path: 'coupons',
    loadChildren: () => import('./pages/coupons/coupons.module').then( m => m.CouponsPageModule)
  },
  {
    path: 'otp-verification',
    loadChildren: () => import('./pages/otp-verification/otp-verification.module').then( m => m.OtpVerificationPageModule)
  },
  {
    path: 'shared/location-setup',
    loadChildren: () => import('./shared/location-setup/location-setup.module').then( m => m.LocationSetupPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
