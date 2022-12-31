import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';

declare var google;
@Component({
  selector: 'app-location-setup',
  templateUrl: './location-setup.page.html',
  styleUrls: ['./location-setup.page.scss'],
})
export class LocationSetupPage implements OnInit ,AfterViewInit{
  @ViewChild('map')
  mapRef: ElementRef<HTMLElement>;
  newMap: GoogleMap;
  markerId:string;

  center:any= {
    lat:9.848731,
    lng: 78.4845096,
  }
  constructor() {


  }

  ngOnInit() {
  }
  ngAfterViewInit(): void {


this.createMap();




      }
      async createMap() {
        this.newMap = await GoogleMap.create({
          id: 'my-cool-map',
          element: this.mapRef.nativeElement,
          apiKey: environment.googleMapApi,
          config: {
            center: this.center,
            zoom: 18,
          },
        });
      }

      async addMarker(lat, lng){
        this.markerId=await this.newMap.addMarker({
          coordinate:{
            lat:lat,
            lng:lng
          },
          draggable:true
        })
      }

      async removeMarker(){
        await this.newMap.removeMarker(this.markerId);
      }


    }


