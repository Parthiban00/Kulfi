import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { Geolocation } from '@ionic-native/geolocation/ngx';
import { IonicModule } from '@ionic/angular';
import { LocationSetupPageRoutingModule } from './location-setup-routing.module';
import { LocationSetupPage } from './location-setup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocationSetupPageRoutingModule
  ],
  declarations: [LocationSetupPage],
  providers:[  ]

})
export class LocationSetupPageModule {}
