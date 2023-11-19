import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeLandPageRoutingModule } from './home-land-routing.module';

import { HomeLandPage } from './home-land.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeLandPageRoutingModule
  ],
  declarations: [HomeLandPage]
})
export class HomeLandPageModule {}
