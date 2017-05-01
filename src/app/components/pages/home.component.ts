import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { UnsplashService } from '../../services/unsplash.service';
import { GeolocationService } from '../../services/geolocation.service';
import { DataService } from '../../services/data.service';

import { WeatherCondition } from '../../../WeatherCondition';
import { WeatherStats } from '../../../WeatherStats';
// import { Location } from '../../../Location';
// import { Coordinates } from '../../../Coordinates';


@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit{
  zipcode: string;
  lat: string;
  lon: string;
  unsplashObject: any;

  constructor(
    private _router:Router,
    private _unsplashService:UnsplashService,
    private _geolocationService:GeolocationService,
    private _dataService: DataService
  ){

  }

  ngOnInit(){
    // this.getBackground("weather");
  }

  updateZipcode(){
    if (this.zipcode.length >= 5){
      this._dataService.setZipcode(this.zipcode);
      this.navigateToPlayer();
      // this._router.navigate(['/player', this.zipcode]);
    }
  }

  locateUser(){
    this._geolocationService.getLocation({}).subscribe(res => {
      this.lat = res.coords.latitude;
      this.lon = res.coords.longitude;
      this._dataService.setCoords(this.lat, this.lon);
      this.navigateToPlayer();
    });

      // if (navigator.geolocation) {
      //     console.log('Geolocation supported in this browser.');
      // } else {
      //     console.log('This browser does not support Geolocation services.');
      // }
      //
      // var geoSuccess = function(position) {
      //     var location = 'lat=' + position.coords.latitude + '&lon=' + position.coords.longitude;
      //     this._router.navigate(['/player', location]);
      //     // coordString = position.coords.latitude + ',' + position.coords.longitude;
      // };
      //
      // var geoError = function(error) {
      //     console.log('Error occurred obtaining geolocation data. Error Code: ' + error.code);
      //
      // };
      // navigator.geolocation.getCurrentPosition(geoSuccess, geoError);

    //   var geocoder = new google.maps.Geocoder;

  }

  // getZipFromCoordinates(){
  //   this._googleMapsService.getZipFromGeolocation().subscribe(res => {
  //     console.log(res);
  //   })
  // }

  getBackground(condition: string){
    this._unsplashService.getImage(condition).subscribe(res => {
      this.unsplashObject = res;
    })
  }

  navigateToPlayer(){
    this._router.navigate(['/player']);
  }

}
