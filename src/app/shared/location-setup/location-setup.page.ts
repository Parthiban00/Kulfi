import { Component, OnInit, ElementRef, OnDestroy, Renderer2, ViewChild } from '@angular/core';
import { GmapsService } from '../../services/gmaps/gmaps.service';
import { ActionSheetController } from '@ionic/angular';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-location-setup',
  templateUrl: './location-setup.page.html',
  styleUrls: ['./location-setup.page.scss'],
})
export class LocationSetupPage implements OnInit {
  @ViewChild('map', { static: true }) mapElementRef: ElementRef;
  googleMaps: any;
  center = {
    lat: 9.848731,
    lng: 78.4845096
  };
  currentPositionCoords: any;
  map: any;
  mapClickListener: any;
  markerClickListener: any;
  markers: any[] = [];
  geocoder:any;
  formattedAddress:string;


  constructor(
    private gmaps: GmapsService,
    private renderer: Renderer2,
    private actionSheetCtrl: ActionSheetController
  ) {


  }

  ngOnInit(): void {


  }

  ngAfterViewInit() {
    const printCurrentPosition = async () => {
      const coordinates = Geolocation.getCurrentPosition();
      return coordinates;
    };

    printCurrentPosition().then((data) => {
      this.currentPositionCoords = {
        lat: data.coords.latitude,
        lng: data.coords.longitude
      }
      this.loadMap();

    })

  }




  async loadMap() {
    try {
      let googleMaps: any = await this.gmaps.loadGoogleMaps();
      this.googleMaps = googleMaps;
      const mapEl = this.mapElementRef.nativeElement;
      const location = new googleMaps.LatLng(this.currentPositionCoords.lat, this.currentPositionCoords.lng);
      this.map = new googleMaps.Map(mapEl, {
        center: location,
        zoom: 20,
      });
      this.renderer.addClass(mapEl, 'visible');
      this.addMarker(location);
      this.onMapClick();


       this.geocoder = new googleMaps.Geocoder();
       this.reverseGeocode(this.currentPositionCoords.lat, this.currentPositionCoords.lng);

    } catch (e) {
      console.log(e);
    }


  }
//to get address
  reverseGeocode(latitude, longitude) {
    console.log('getAddress entered');
    this.geocoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      if (status === 'OK') {
        if (results[0]) {
         // this.zoom = 12;
          // this.address = results[0].formatted_address;
          // this.formattedAddress=this.address;
          // console.log("getAddress "+this.address);
          //  this.locationAddress={
          //   lat:latitude,
          //   lon:longitude,
          //   address:this.address,
          //   locality:this.selectedValue
          // }
          console.log('fomatted addres (reverse geocode) ',results[0].formatted_address);
          this.formattedAddress=results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }

    });
  }

  onMapClick() {
    this.mapClickListener = this.googleMaps.event.addListener(this.map, "click", (mapsMouseEvent) => {
      console.log(mapsMouseEvent.latLng.toJSON());
      //  this.addMarker(mapsMouseEvent.latLng);
    });
  }

  addMarker(location) {
    let googleMaps: any = this.googleMaps;
    const icon = {
      url: 'assets/location_pin.png',
      scaledSize: new googleMaps.Size(50, 50),
    };
    const marker = new googleMaps.Marker({
      position: location,
      map: this.map,
      icon: icon,
      draggable: false,
      animation: googleMaps.Animation.DROP,
    });
    this.markers.push(marker);

    this.map.addListener('drag', (e)=> {
     // console.log(`Current Map Center: ${this.map.getCenter()}`);
      console.log('current map center - lat ',this.map.getCenter().lat(),' lng ',this.map.getCenter().lng())
    //  this.reverseGeocode(this.map.getCenter().lat(), this.map.getCenter().lng());
     marker.setPosition(this.map.getCenter());
  });

  this.map.addListener('idle', (e)=> {
    // console.log(`Current Map Center: ${this.map.getCenter()}`);
   //  console.log('current map center - lat ',this.map.getCenter().lat(),' lng ',this.map.getCenter().lng())
     this.reverseGeocode(this.map.getCenter().lat(), this.map.getCenter().lng());
   // marker.setPosition(this.map.getCenter());
 });
  }

  checkAndRemoveMarker(marker) {
    const index = this.markers.findIndex(x => x.position.lat() == marker.position.lat() && x.position.lng() == marker.position.lng());
    console.log('is marker already: ', index);
    if (index >= 0) {
      this.markers[index].setMap(null);
      this.markers.splice(index, 1);
      return;
    }
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Added Marker',
      subHeader: '',
      buttons: [
        {
          text: 'Remove',
          role: 'destructive',
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Save',
          data: {
            action: 'share',
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();
  }

  ngOnDestroy() {
    // this.googleMaps.event.removeAllListeners();
    if (this.mapClickListener) this.googleMaps.event.removeListener(this.mapClickListener);
    if (this.markerClickListener) this.googleMaps.event.removeListener(this.markerClickListener);
  }



}
