import { Component } from '@angular/core';

import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { OpenWeatherMapService } from '../../services/openweathermap.service';
import { WeatherCondition } from '../../../WeatherCondition';
import { WeatherStats } from '../../../WeatherStats';
import { GeocodeService } from '../../services/geocode.service';
import { AgmCoreModule, GoogleMapsAPIWrapper } from 'angular2-google-maps/core';
import { MapsAPILoader } from 'angular2-google-maps/core';


@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})


export class HomeComponent {
  zipcode: string;
  latitude: number;
  longitude: number;


  constructor(private _router:Router, private _geocodeService: GeocodeService){

  }

  updateZipcode(){
    if (this.zipcode.length >= 5){
      this._router.navigate(['/player', this.zipcode]);
      // this._router.navigate(['/player', this.zipcode]);
    }
  }

  locateUser() {
      if (navigator.geolocation) {
          console.log('Geolocation supported in this browser.');
      } else {
          console.log('This browser does not support Geolocation services.');
      }

      var currPos, lat, long;
      var geoSuccess = function(position) {
          currPos = position;
          this.latitude = currPos.coords.latitude;
          this.longitude = currPos.coords.longitude;
          console.log('Lat: ' + this.latitude +'\nLong: ' + this.longitude);
      };

      var geoError = function(error) {
          console.log('Error occurred obtaining geolocation data. Error Code: ' + error.code);

      };

      navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
      this.zipcode = this._geocodeService.getZip(this.latitude, this.longitude);
      this.updateZipcode();
  }

}
