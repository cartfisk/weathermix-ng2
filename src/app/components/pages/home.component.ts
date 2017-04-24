import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { UnsplashService } from '../../services/unsplash.service';
import { WeatherCondition } from '../../../WeatherCondition';
import { WeatherStats } from '../../../WeatherStats';


@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit{
  zipcode: string;
  unsplashObject: any;

  constructor(private _router:Router, private _unsplashService:UnsplashService){

  }

  ngOnInit(){
    this.getBackground("weather");
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
          lat = currPos.coords.latitude;
          long = currPos.coords.longitude;
          console.log('Lat: ' + lat +'\nLong: ' + long);
      };

      var geoError = function(error) {
          console.log('Error occurred obtaining geolocation data. Error Code: ' + error.code);

      };

      navigator.geolocation.getCurrentPosition(geoSuccess, geoError);

    //   var geocoder = new google.maps.Geocoder;

  }

  getBackground(condition: string){
    this._unsplashService.getImage(condition).subscribe(res => {
      this.unsplashObject = res;
    })
  }

}
