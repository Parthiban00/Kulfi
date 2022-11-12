import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

declare var google;
@Component({
  selector: 'app-location-setup',
  templateUrl: './location-setup.page.html',
  styleUrls: ['./location-setup.page.scss'],
})
export class LocationSetupPage implements OnInit ,AfterViewInit{
  public geocoder;
  @ViewChild('mapElement', { static: false }) mapElement;

  autocomplete: { input: string; };
  autocompleteItems: any[];
  GoogleAutocomplete: any;
  coords;
  placeid: any;

 lat:any;
 lng:any;
 zoom: number;
 address: string;
 formattedAddress:string;
 locationAddress;
 locality: string="";

 map:any;
  constructor(private geolocation:Geolocation) {
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.autocomplete = { input: '' };
    this.autocompleteItems = [];

  }

  ngOnInit() {
  }
  ngAfterViewInit(): void {



    this.loadMap();



      }


      loadMap() {

        //FIRST GET THE LOCATION FROM THE DEVICE.
        this.geolocation.getCurrentPosition().then((resp) => {
          let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
          let mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          }

          console.log(mapOptions)


          //LOAD THE MAP WITH THE PREVIOUS VALUES AS PARAMETERS.
         // this.getAddress(resp.coords.latitude, resp.coords.longitude);
         this.geocoder = new google.maps.Geocoder();
         console.log(this.geocoder);
          this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
          console.log(this.map);
          console.log(this.mapElement.nativeElement)
          this.map.addListener('tilesloaded', () => {
            console.log('accuracy',this.map, this.map.center.lat());

            this.lat = this.map.center.lat()
            this.lng = this.map.center.lng()
            this.getAddress(this.map.center.lat(), this.map.center.lng())
          });
        }).catch((error) => {
          console.log('Error getting location', error);
        });
      }

      getAddress(latitude, longitude) {
        console.log('getAddress entered');
        this.geocoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
          if (status === 'OK') {
            if (results[0]) {
              this.zoom = 12;
              this.address = results[0].formatted_address;
              this.formattedAddress=this.address;
              console.log("getAddress "+this.address);
               this.locationAddress={
                lat:latitude,
                lon:longitude,
                address:this.address,
                locality:this.locality
              }
            } else {
              window.alert('No results found');
            }
          } else {
            window.alert('Geocoder failed due to: ' + status);
          }

        });
      }

       getLocation(){
        if(navigator.geolocation){
           // timeout at 60000 milliseconds (60 seconds)
           var options = {timeout:60000};
           navigator.geolocation.getCurrentPosition
           (this.showLocation, this.errorHandler, options);
        } else{
           alert("Sorry, browser does not support geolocation!");
        }
     }

      showLocation(position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      var latlongvalue = position.coords.latitude + ","
      + position.coords.longitude;
    console.log(latitude);
   }
 errorHandler(err) {
      if(err.code == 1) {
         alert("Error: Access is denied!");
      } else if( err.code == 2) {
         alert("Error: Position is unavailable!");
      }
   }
    }


