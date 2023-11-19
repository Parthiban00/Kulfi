import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {

        path: 'home-main',
        loadChildren: () => import('../pages/home-main/home-main.module').then(m => m.HomeMainPageModule)

      },
      {
        path: 'cart',
        loadChildren: () => import('../pages/cart/cart.module').then( m => m.CartPageModule)
      },
      {
        path: '',
        redirectTo:'/tabs/home-main',
        pathMatch:'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
