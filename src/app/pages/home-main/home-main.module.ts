import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeMainPageRoutingModule } from './home-main-routing.module';

import { HomeMainPage } from './home-main.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeMainPageRoutingModule
  ],
  declarations: [HomeMainPage]
})
export class HomeMainPageModule {}
